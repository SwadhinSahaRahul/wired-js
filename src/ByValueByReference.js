// by Value
var a = 3;
var b;
b = a; // they will be copied to different memory spaces
a = 10;
console.log(a, b);

//----------------------------------------------------------------//
// by reference (all objects(including functions))
var c = {name: 'Rahul'};
var d;

d = c; // pointing the variable names to same memory reference

c.name = 'Other Person'; // mutated

console.log(c, d);

//----------------------------------------------------------------//
// by reference (even as parameter)
function changeName(obj) {
    obj.name = 'hola'; // mutated
}

changeName(d);

console.log(c, d);

//----------------------------------------------------------------//
// equal operator sets up new memory space (new address)
c = {name: 'Swadhin'};

/**
 * this is a special case
 */

console.log(c, d);