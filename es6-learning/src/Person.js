class User {
    constructor(firstName, lastName, email) {
        this.first_name = firstName;
        this.last_name = lastName;
        this.email = email;
    }

    get fullName() {
        return `${this.first_name} ${this.last_name}`;
    }

    set firstName(newName) {
        this.first_name = newName;
    }

    static register(...args) {
        return new User(...args);
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }

    greet() {
        return `${this.name} say hello`;
    }
}

let user = User.register('Swadhin', 'Saha', 'test@test');
console.log(user)
user.changeEmail("rahul4kuet2k10@gmail.com");
console.log(user);
console.log(user.fullName);
user.fullName = "aa";
console.log(user);
user.firstName = "Rahul";
console.log(user);