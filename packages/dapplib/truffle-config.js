require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off foot alcohol random sad under inside light army gasp'; 
let testAccounts = [
"0x2d558102870717992fec263b960092424a6a0c5e66f37994e9836f65490e44a3",
"0x257fb39748ad8c827fa465f3307f4ba8d2755a01131e1d568de675eb8fabbe03",
"0x7c9e545fc3fbc5f20d98fd2b263e25f3994754642e0068c13173a250ef4e2258",
"0x80aaec0cb81ce4f7f59e5c31de65da72cd300a1ff4ff155f165e60254fde54f8",
"0x0a0f11f9f905799daa23a41ecd753390579047bdeddc3e11ccb78cd109d61cff",
"0x7be985abb5d114e152b3622e400840ba2f79ff5082ae1833389b92544a6903b2",
"0xf026690c8c0141f20169628c3c6c471b399acb0b697545fe37bf7b5837a2c72f",
"0x628ea7a0c47b4088e5b5b49adec758c1f629cfcb46d2f1202ed69cd438b33830",
"0xf8e7135de50234db9d3d8c08f6fd0e0c6c17fe9ada7961cd580846cc89b72f2b",
"0xdd23c9a0183da225895f6534552ccf702c2fd8e28dfddb4a5322728a7488abbc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


