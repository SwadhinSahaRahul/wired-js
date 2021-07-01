// IIFE => Immediately Invoked Functions Expressions

// function statement
function greet(name) {
    console.log("Hello " + name);
}

greet('Swadhin');


// using a function expression
var greetFunc = function (name) {
    console.log("Hello " + name);
};

greetFunc('Rahul');


// using an Immediately Invoked Functions Expressions (IIFE)
var greeting = function (name) {
    return 'Hello ' + name;
}('Rahul');

console.log(greeting);

// This portion is valid, does nothing
3;
"I am a string";
{
    "Rahul"
}

(3 + 4);

// Not valid sentax

/*function (name) {
    console.log(name);
}*/

// Wrap to parenthecis to trick the
(function (name) {
    console.log(name);
}('Rahul'));


// This is the classic example of IIFE
var firstname = 'RRR';

(function (name) {
    console.log(name);
}(firstname));

(function (name) {
    console.log(name);
})(firstname);

var name = 'Swadhin';

(function (global, name) {
    var name = 'Rahul';
    global.name = 'Another name';
}(window, firstname));

console.log(name);