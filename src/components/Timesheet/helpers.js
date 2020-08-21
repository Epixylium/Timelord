import arweave from '../../arweave-config';
import { toast } from 'react-toastify';
import settings from '../../config';

export async function saveTSheet(client_id, tsheet_start, tsheet_finish, tsheet_desc) {
    console.log(tsheet_start + " " + tsheet_finish + " " + tsheet_desc);

    var tsheet = {
        clientid: client_id,
        start: tsheet_start,
        finish: tsheet_finish,
        desc: tsheet_desc
    }

    const jwk = JSON.parse(sessionStorage.getItem('AR_jwk', null));

    let transaction = await arweave.createTransaction({
        data: JSON.stringify(tsheet)
    }, jwk);

    transaction.addTag('App', settings.APP_NAME);
    transaction.addTag('Type', 'Timesheet');

    await arweave.transactions.sign(transaction, jwk);

    const response = await arweave.transactions.post(transaction);
    console.log(response.status);

    if(response.status == 200) {
        toast("Your Timesheet has been saved and will be mined shortly!", { type: toast.TYPE.SUCCESS });  
    }
}

export async function getTSheets() {
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
                expr2: settings.APP_NAME
            },
            expr2: {
                op: "equals" ,
                expr1: "Type" ,
                expr2: "Timesheet"
            }
        }
    });

    const tsheets = [];

    for(let i in txids) {
        const txid = txids[i];

        const data = await arweave.transactions.getData(txid, {decode: true, string: true});

        if(data.length == 0) {
            continue;
        }

        const timesheet = {
            id: txid,
            ... JSON.parse(data)
        };

        timesheet.start = new Date(timesheet.start);
        timesheet.finish = new Date(timesheet.finish);

        tsheets.push(timesheet);
    }

    return tsheets;
}