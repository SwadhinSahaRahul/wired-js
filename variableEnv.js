class User {
    constructor() {
        this.first_name = 'Swadhin';
        this.last_name = 'Saha';
    }

    getName() {
        return `${this.first_name} ${this.last_name}`;
    }

    getLastName() {
        return this.last_name;
    }
}

let user = new User();

console.log(user.getLastName());

console.log('1' - 1);
console.log(1 * '1');