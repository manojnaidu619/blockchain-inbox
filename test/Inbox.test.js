const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')                // This is a constructor
const web3 = new Web3(ganache.provider())  // Instance of the constructor
const { abi, evm: { bytecode }} = require('../compile')

let accounts, contract, message;

beforeEach(async () => {
    // Get all connected accounts
    accounts = await web3.eth.getAccounts();

    // Create a contract object and send the transaction to the network
    contract = await new web3.eth.Contract(abi)
        .deploy({ data: bytecode.object })
        .send({ from: accounts[0], gas: 1500000, gasPrice: '30000000000000' })
    
    // Save the contract address
    contractAddress = await contract.options.address;
    message = "Hello World!";
})

describe('Test contract', () => {
    it('Deploys contract', () => {
        // Checks is there is contract address present in the response
        assert.ok(contract.options.address);
    })
    it('Verifies contract address', () => {
        assert.ok(contractAddress);
    })
    it("can set and read the message", async () => {
        // Modifying data in the smert contract is considered to be a transaction and it costs.
        await contract.methods.setMessage(message).send({ from: accounts[0] })

        // Just retreiving the data is instantaneous and it does not cost anything.
        let receivedMessage = await contract.methods.getMessage().call()
        assert.strictEqual(receivedMessage, message);
    })
})