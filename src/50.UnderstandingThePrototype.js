var person = {
    firstName: "Default",
    lastName: "Default",
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// don't do this Ever! for Demo purpose only!!!
john.__proto__ = person;

console.log(john.firstName, john.lastName, john.getFullName());

var jane = {
    firstName: 'Jane'
}

jane.__proto__ = person;

console.log(jane.firstName, jane.lastName, jane.getFullName());