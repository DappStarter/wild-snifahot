require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil foot dad cruise office code hunt pave army general'; 
let testAccounts = [
"0xd4697b2995e4f99a9dc890065903a1c6d4216795c700d165460bff0fdd0ae737",
"0x36ba453926943f648543a33226042de5c4a654cc9a7d7f5291a019c6e06b6c0c",
"0xa329d93d08a3e05ea490b506834afff196c8552e5aa6cb495c7a2fcb38c7484d",
"0x768368ec207b8036bc1a4b6b0ef0bae2582174ac54cdf9ddd26edd1f02a63412",
"0x1a007e17bb8da8b7712d42a5c40090d75546a02d7b2584f197f445c2014e7a7b",
"0x7446a80e9ed43f678a9b5bc78032f818f895cba0eaf55dacf828934fe2384385",
"0x4ed66090059fa70ff475c297ed917e0bc0a7b4be1ceb18e089cdec9ba0e8a887",
"0x4c4120fa7298d477d4ab1bdddcd78daac40c0895c68d3ab4cc7c5b8af631d293",
"0x964eb53faa98da9dc9eee6ea1528b17b698139801ffeefd5e0ecd9fb03167784",
"0x333cb38e6b9efa46fd428c0d33b5c8c14c8321152158d95148c1a67d6308d80a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

