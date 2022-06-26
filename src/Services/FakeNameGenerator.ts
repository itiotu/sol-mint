import axios from 'axios'

export default class FakeNameGenerator {
    static async generateName(): Promise<string> {
        const nameResponse = await axios.get('https://api.namefake.com/');
        if (nameResponse.data.name) {
            return nameResponse.data.name;
        }

        throw new Error('Could not generate hero name');
    }
}
