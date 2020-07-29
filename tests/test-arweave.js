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
