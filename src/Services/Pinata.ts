import {Card} from "../Types/Card";
import axios from 'axios';
import FormData from 'form-data';

export default class Pinata {
    static async uploadCard(card: Card): Promise<string> {

        const form = new FormData();
        form.append('file', JSON.stringify(card), 'stickers.jpg');
        form.append('pinataOptions', JSON.stringify({cidVersion: 1}));
        form.append('pinataMetadata', JSON.stringify({name: `hero ${card.hero.name}`}));

        const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', form,{
            headers: {
                ...form.getHeaders(),
                'Authorization': `Bearer ${process.env.PINATA_JWL}`
            }
        })
        if (response.data.IpfsHash) {
            return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        }

        throw new Error('Could not upload NFT metadata to Pinata');
    }
}
