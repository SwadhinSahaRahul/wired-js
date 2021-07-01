const p = new Promise((resolve, reject) => {
    console.log('from p body');
    setTimeout(() => {
        console.log('from p timeout');
        resolve("b");
    }, 5000);
});

function b() {
    console.log('from b body');
    p.then((data) => {
        console.log('from b then');
        console.log(data);
    });
}

function a() {
    b();
    console.log('a');
}

a();