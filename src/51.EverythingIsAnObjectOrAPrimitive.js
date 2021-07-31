// const _ = require('../assets/underscore');

var a = {};
var b = function () {
};
var c = [];

var d = 'Hello';

console.log(a.__proto__);
console.log(b.__proto__);
console.log(c.__proto__);
console.log(d.__proto__);

if (d.__proto__ === null) {
    console.log(true);
} else {
    console.log(d.__proto__.__proto__);
}