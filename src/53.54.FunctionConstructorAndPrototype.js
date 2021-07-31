/**
 * All the functions in JS have `prototype`
 */

/**
 *
 * @param firstname
 * @param lastname
 * @constructor
 */
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    this.getFullName = function () {
        return this.firstname + ' ' + this.lastname;
    }
    console.log('This function is invoked');

}

console.log(Person.prototype);

var jack = new Person('Jack', 'Ryan');
console.log(jack, jack.__proto__);

var rahul = new Person('Swadhin', 'Saha');
console.log(rahul);
/**
 * When we use `new`; this is function constructor
 * new executes the function and if no return statement it returns the object
 * When we call `new`; `prototype` is set initially with empty Object {}
 */

Person.prototype.getFullFormalName = function () {
    return this.lastname + ', ' + this.firstname;
}

console.log(rahul.getFullFormalName());

/**
 * getFullName is placed in memory for each object
 * getFullFormalName is placed only once in memory
 */


String.prototype.isLengthGreaterThan = function (limit) {
    return this.length > limit;
}

console.log("jhon".isLengthGreaterThan(2));

Number.prototype.isPositive = function () {
    return this > 0;
}

// Can not write for number type
//3.isPositive();

var a = new Number(-8);
console.log(a, a.isPositive());