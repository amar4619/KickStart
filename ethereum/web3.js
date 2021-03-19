import Web3 from "web3";
//configuring web3 with a provider from metamadk
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
    //We wre in the browser or the user is not using running metamask
const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/1da55699e83a4abab84358b0b5679398'
);
web3 = new Web3(provider);
}


export default web3;