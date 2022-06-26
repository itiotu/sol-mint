import {createAlchemyWeb3} from "@alch/alchemy-web3";

export default class Mint {
    static async nft(tokenUri: string) {

        const web3 = createAlchemyWeb3(process.env.API_URL || '');

        const contract = require("../../artifacts/contracts/TestNFT.sol/TestNFT.json");
        const nftContract = new web3.eth.Contract(contract.abi, process.env.CONTRACT || '');

        const nonce = await web3.eth.getTransactionCount(process.env.PUBLIC_KEY || '', 'latest');

        const tx = {
            'from': process.env.PUBLIC_KEY || '',
            'to': process.env.CONTRACT || '',
            'nonce': nonce,
            'gas': 500000,
            'maxPriorityFeePerGas': 2999999987,
            'data': nftContract.methods.mintNFT(process.env.PUBLIC_KEY || '', tokenUri).encodeABI()
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY || '');
        if (signedTx.rawTransaction) {

            return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        }

        throw new Error('Could not mint NFT.');
    }

    static async getAllNftForWallet(wallet: string) {
        const web3 = createAlchemyWeb3(process.env.API_URL || '');

        return web3.alchemy.getNfts({owner: wallet, withMetadata: true});
    }
}
