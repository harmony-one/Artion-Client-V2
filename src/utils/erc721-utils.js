// import needed libs
import Web3 from 'web3';
// ZERO_AMOUNT represents zero amount transferred on some calls.
const ZERO_AMOUNT = process.env.UE_APP_ZERO_AMOUNT;
// HARMONY_CHAIN_ID is the chain id used by Fantom Opera blockchain.
const HARMONY_CHAIN_ID = process.env.VUE_APP_HARMONY_CHAIN_ID;
// TESTNET_CHAIN_ID is the chain id used by Fantom Opera test net.
const TESTNET_CHAIN_ID = process.env.VUE_APP_TESTNET_CHAIN_ID;
/**
 * erc721Approve creates a transaction for setting ERC-721 token approval, which allows
 * approved party to transfer the specified NFT token of the approving owner.
 *
 * @param {string} erc721Address
 * @param {string} approveTo
 * @param {string|{BN}} tokenId
 * @return {{data: string, chainId: string, to: string, value: string}}
 */
function erc721Approve(erc721Address, approveTo, tokenId) {
    // create web3.js instance
    const web3 = new Web3();
    // make the transaction
    return {
        to: erc721Address,
        value: ZERO_AMOUNT,
        data: web3.eth.abi.encodeFunctionCall(
            {
                constant: false,
                inputs: [
                    {
                        name: '_to',
                        type: 'address',
                    },
                    {
                        name: '_tokenId',
                        type: 'uint256',
                    },
                ],
                name: 'approve',
                outputs: [],
                payable: true,
                stateMutability: 'payable',
                type: 'function',
            },
            [approveTo, tokenId]
        ),
        chainId: HARMONY_CHAIN_ID,
    };
}

/**
 * erc721Transfer creates a transaction to transfer an ERC-721 token to a different owner.
 *
 * @param {string} erc721Address
 * @param {string} transferFrom
 * @param {string} transferTo
 * @param {string|{BN}} tokenId
 * @return {{data: string, chainId: string, to: string, value: string}}
 */
function erc721TransferFrom(erc721Address, transferFrom, transferTo, tokenId) {
    // create web3.js instance
    const web3 = new Web3();
    // make the transaction
    return {
        to: erc721Address,
        value: ZERO_AMOUNT,
        data: web3.eth.abi.encodeFunctionCall(
            {
                constant: false,
                inputs: [
                    {
                        name: '_from',
                        type: 'address',
                    },
                    {
                        name: '_to',
                        type: 'address',
                    },
                    {
                        name: '_tokenId',
                        type: 'uint256',
                    },
                ],
                name: 'transferFrom',
                outputs: [],
                payable: true,
                stateMutability: 'payable',
                type: 'function',
            },
            [transferFrom, transferTo, tokenId]
        ),
        chainId: HARMONY_CHAIN_ID,
    };
}

// what we export here
export default {
    erc721Approve,
    erc721TransferFrom,
    HARMONY_CHAIN_ID,
    TESTNET_CHAIN_ID,
};
