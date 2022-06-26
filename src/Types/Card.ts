export type Card = {
    hero: Hero;
    type: CardType
    image: string
}

export enum CardType {
    STANDARD = 'standard',
    RARE = 'rare',
    LEGENDARY = 'legendary'
}

export type Hero = {
    name: string;
    power: number;
    agility: number;
    intelligence: number;
    mana: number;
}
