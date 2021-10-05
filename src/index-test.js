function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.getFullName = function () {
        return this.firstname + ' ' + this.lastname;
    }
}

var res1 = Person('Swadhin', 'Saha');
var res2 = new Person('Swadhin', 'Saha');

console.log(res1, res2);

var person1 = new Person('F', 'N');
var person2 = new Person('F', 'N');

console.log(person1);

Person.prototype.getFirstName = function () {
    console.log(this.firstname);
};

person1.getFirstName();
person2.getFirstName();