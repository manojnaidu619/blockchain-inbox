const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { abi, evm: { bytecode } } = require('./compile')

const provider = new HDWalletProvider(
    'gold effort subject rent dry equal royal ripple decade where now lucky',
    'https://rinkeby.infura.io/v3/382d00d630a44631b110629583a8688f'
)

// Now create this web3 instance with provider and use it however needed.
const web3 = new Web3(provider)

const deploy = async () => {
    console.log("Deploying to Rinkeby test network...");
    var accounts = await web3.eth.getAccounts();
    var result = await new web3.eth.Contract(abi).deploy({ data: bytecode.object }).send({ from: accounts[0], gas: 1000000 });
    console.log("Successfully Deployed");
    console.log("Contract address : ", result.options.address);
}

deploy();