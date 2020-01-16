import Dog from './Dog';
export default class PoodleDob extends Dog {
    constructor(name) {
        super(name);
    }
    brake() {
        console.log('喔偓喔')
    }
}