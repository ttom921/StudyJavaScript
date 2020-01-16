export default class Animal {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log('my name=' + this.name);
    }
    run() {
        console.log('i am run');
    }
    brake() {
        console.log('i am brake');
    }
}