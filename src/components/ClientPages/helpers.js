import arweave from '../../arweave-config';
import { toast } from 'react-toastify';

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

    transaction.addTag('App', 'Timelord');
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
                expr2: "Timelord"
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