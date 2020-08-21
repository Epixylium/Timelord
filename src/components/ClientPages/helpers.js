import arweave from '../../arweave-config';
import { toast } from 'react-toastify';
import { encrypt_data, decrypt_data, wallet_to_key, get_public_key} from './crypto';
import settings from '../../config';

export async function saveClient(client_email, client_name, client_address) {
    console.log(client_email + " " + client_name + " " + client_address);

    var client = {
        email: client_email,
        name: client_name,
        address: client_address
    }

    const jwk = JSON.parse(sessionStorage.getItem('AR_jwk', null));

    let transaction = await arweave.createTransaction({
        data: JSON.stringify(client)
    }, jwk);   

    transaction.addTag('App', settings.APP_NAME);
    transaction.addTag('Type', 'Client');

    await arweave.transactions.sign(transaction, jwk);

    const response = await arweave.transactions.post(transaction);
    console.log(response.status);

    if(response.status == 200) {
        toast("Your Client has been saved and will be mined shortly!", { type: toast.TYPE.SUCCESS });  
    }
}

export async function getClients() {
    const wallet_address = sessionStorage.getItem('AR_Wallet', null);
    const jwk = JSON.parse(sessionStorage.getItem('AR_jwk', null));
    
    const txids = await arweave.arql({
        op: "and",
        expr1: {
            op: "equals",
            expr1: "from",
            expr2: wallet_address
        },
        expr2: {
            op: "and",
            expr1: {
                op: "equals",
                expr1: "App",
                expr2: settings.APP_NAME
            },
            expr2: {
                op: "equals" ,
                expr1: "Type" ,
                expr2: "Client"
            }
        }
    });

    const clients = [];

    for(let i in txids) {
        const txid = txids[i];

        const data = await arweave.transactions.getData(txid, {decode: true, string: true});

        if(data.length == 0) {
            continue;
        }

        clients.push({
            id: txid,
            ... JSON.parse(data)
        });
    }

    return clients;
}