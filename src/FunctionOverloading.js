// function Overloading not works in JS

function greet(firstName, lastName, language = 'es') {
    if (language === 'en') {
        console.log('Hello ' + firstName + ' ' + lastName);
    }
    if (language === 'es') {
        console.log('Hola ' + firstName + ' ' + lastName);
    }
}

function greetEnglish(firstName, lastName) {
    greet(firstName, lastName, 'en');
}

function greetSpanish(firstName, lastName) {
    greet(firstName, lastName, 'es');
}

greetEnglish('Swadhin', 'Saha');
greetSpanish('Swadhin', 'Saha');

//=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=><=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=

function test(a) {
    console.log(a);
}

function test(a, b) {
    console.log(a, b);
}

test("A");
test("A", "B");

for (var i = 1; i <= 2; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000)
}

//=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=><=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=