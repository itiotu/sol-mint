import {Hero} from "../Types/Card";
import Random from "../Utils/Random";
import FakeNameGenerator from "./FakeNameGenerator";

export default class HeroGenerator {
    static async generate(): Promise<Hero> {
        return {
            name: await FakeNameGenerator.generateName(),
            power: Random.randomIntFromInterval(1, 100),
            agility: Random.randomIntFromInterval(1, 100),
            intelligence: Random.randomIntFromInterval(1, 100),
            mana: Random.randomIntFromInterval(1, 100)
        } as Hero;
    }
}
