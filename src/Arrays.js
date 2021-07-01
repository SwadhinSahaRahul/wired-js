// JS is dynamically typed
// determines the type on the fly

var arr = [
    1,
    false,
    {
        name: 'Rahul',
        address: 'Address'
    },
    function (name) {
        var greetings = 'Hello ';
        console.log(greetings + name);
    },
    'hello'
];

console.log(arr);
arr[3](arr[2].name);