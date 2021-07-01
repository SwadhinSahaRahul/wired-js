class SomePromise {
    static somePromiseMethod(from) {
        console.log(from);
        return new Promise(((resolve, reject) => {
            let timer = 10000;
            if (from === 'b') {
                timer = 5000;
            } else if (from === 'c') {
                timer = 3000;
            }
            setTimeout(() => {
                console.log(timer);
                resolve({
                    from: from
                });
            }, timer);

        }))
    }
}

async function method(from) {
    return new Promise(async function(resolve, reject){
        resolve(await SomePromise.somePromiseMethod(from));
    })
}

function a() {
    return new Promise((resolve, reject) => {
        resolve(method('a'));
    });
}

function b() {
    return new Promise((resolve, reject) => {
        resolve(method('b'));
    });
}

function c() {
    return new Promise((resolve, reject) => {
        resolve(method('c'));
    });
}

async function call() {
    const a1 = await a();
    const b2 = await b();
    const c3 = await c();
}

call();

/*
async function a() {
    await method('a').then((data) => {
        console.log(data);
    });
}

async function b() {
    await method('b').then((data) => {
        console.log(data);
    });
}

async function c() {
    await method('c').then((data) => {
        console.log(data);
    });
}

a();*/

