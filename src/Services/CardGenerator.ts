import {Card, CardType} from "../Types/Card";
import HeroGenerator from "./HeroGenerator";
import Random from "../Utils/Random";

export default class CardGenerator {
    static async generate(): Promise<Card> {
        return {
            hero: await HeroGenerator.generate(),
            type: Random.randomEnum(CardType),
            image: 'https://gateway.pinata.cloud/ipfs/bafkreie43o7p2rjzjub5pyffu53tkkq7tp4pj2mxzomjuvltmow2xsf7em'
        } as Card;
    }
}
