const Arweave = require('arweave/node');
const fs = require('fs');

const arweave = Arweave.init({
    host: 'arweave.net',// Hostname or IP address for a Arweave host
    port: 443,          // Port
    protocol: 'https',  // Network protocol http or https
    timeout: 20000,     // Network request timeouts in milliseconds
    logging: false,     // Enable network request logging
});

const wallet_file = "C:\\Users\\micha\\OneDrive\\Documents\\Important\\arweave-keyfile-6b5e6Ys64SNOVJQ396ewkrkL4VQ5sBTFOT8-QXxCgNE.json";

const text = fs.readFileSync(wallet_file);

const jwk = JSON.parse(text);

arweave.wallets.jwkToAddress(jwk).then((wallet_address) => {                
    arweave.wallets.getBalance(wallet_address).then((balance) => {
        let winston = balance;
        let ar = arweave.ar.winstonToAr(balance);
    
        console.log(winston);
        // eg 125213858712
    
        console.log(ar);
        // eg 0.125213858712
    });
});

async function createTransactions() {
    // Plain text
    let transactionA = await arweave.createTransaction({
        data: '<html><head><meta charset="UTF-8"><title>Hello world!</title></head><body></body></html>'
    }, jwk);

    transactionA.addTag("AppName", "TimeLord");

    await arweave.transactions.sign(transactionA, jwk);
    await arweave.transactions.post(transactionA);

    console.log(transactionA);
}



arweave.arql({
    op: "and",
    expr1: {
      op: "equals",
      expr1: "from",
      expr2: "6b5e6Ys64SNOVJQ396ewkrkL4VQ5sBTFOT8-QXxCgNE"
    },
    expr2: {
      op: "equals",
      expr1: "AppName",
      expr2: "TimeLord"
    }
  }).then(txids => {
    debugger;
    for(let i in txids) {
        let tx = arweave.transactions.get(txids[i]).then(transaction => {
            console.log(transaction);
        });
    
        tx = arweave.transactions.getData(txids[i], {decode: true, string: true}).then(data => {
            console.log(data);
        });
    }
  })



//createTransactions();

// Transaction {
//   format: 2,
//   id: 'ReUohI9tEmXQ6EN9H9IkRjY9bSdgql_OdLUCOeMEte0',
//   last_tx: 'Tk-0c7260Ya5zjfjzl4f6-W-vRO94qiqZMAScKBcYXc68v1Pd8bYfTbKWi7pepUF',
//   owner: 'kmM4O08BJB85RbxfQ2nkka9VNO6Czm2Tc_IGQNYCTSXRzO...',
//   tags: [],
//   target: '',
//   quantity: '0',
//   data: 'c29tZSBkYXRh',
//   data_size: '9',
//   data_root: 'qwKZUl7qWpCEmB3cpONKTYOcSmnmhb-_s8ggMTZwCU4',
//   data_tree: [],
//   reward: '7489274',
//   signature: 'JYdFPblDuT95ky7_wVss3Ax9e4Qygcd_lEcB07sDPUD_wNslOk...'
// }