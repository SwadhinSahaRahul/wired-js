// IIFE => Immediately Invoked Functions Expressions

function a() {
    console.log('a');
}

function b() {
    setTimeout(function () {
    }, 5000);
    console.log('b');
}