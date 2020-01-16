import Animal from './Animal';
export default class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    brake() {
        console.log('miao miao miao');
    }
}