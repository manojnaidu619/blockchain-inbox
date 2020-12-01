const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { abi, evm: { bytecode } } = require('./compile')

const provider = new HDWalletProvider(
    'gold effort subject rent dry equal royal ripple decade where now lucky',
    'https://rinkeby.infura.io/v3/382d00d630a44631b110629583a8688f'
)

const web3 = new Web3(provider)