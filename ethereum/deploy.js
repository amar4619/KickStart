 const HDWalletProvider = require("truffle-hdwallet-provider");
 const Web3 = require("web3");
 const compiledFactory = require("./build/CampaignFactory.json");

 const provider = new HDWalletProvider(
     'clog little super fortune agent panel waste text frozen satoshi gospel antenna',
     'https://rinkeby.infura.io/v3/1da55699e83a4abab84358b0b5679398'
 );

 const web3 = new Web3(provider);

 const deploy = async() => {
     const accounts = await web3.eth.getAccounts();

     console.log("Deploying contract from account", accounts[0]);

     const result = await new web3.eth.Contract(compiledFactory.abi)
         .deploy({ data: compiledFactory.evm.bytecode.object })
         .send({ gas: "1000000", from: accounts[0] });
     console.log("Contract deployed to", result.options.address);
 };

 deploy();