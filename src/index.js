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

/*-------------------------------------------------------------------------*/

function calcAvgHeight(data) {

    // Calculate average height from received data. If no data, return null.
    if (Object.keys(data).length === 0) {
        return null;
    }

    var total = 0;
    var count = 0;
    for (person in data) {
        if (data[person].hasOwnProperty('height')) {
            total += data[person].height;
            count++;
        }
    }
    return total / count;
}

var avgHeight = calcAvgHeight({
    Matt: {height: 174, weight: 69},
    Jason: {height: 190, weight: 103}
});
console.log(avgHeight);