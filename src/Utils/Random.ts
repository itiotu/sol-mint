export default class Random {
    static randomIntFromInterval(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    static randomEnum<T>(anEnum: T): string {
        const objectKeys = Object.keys(anEnum);
        const random = this.randomIntFromInterval(0, objectKeys.length - 1);

        return objectKeys[random];
    }
}
