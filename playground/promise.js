// Advanced Promise
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(5, 10).then((res) => {
    console.log('Result: ', res);
    //Chaining Promises
    return asyncAdd(res, 44);
}).then((res) => {
    console.log('Should be 59', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// Basic Promise
// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This works as expected');
//         // reject('Unable to fulfill promise');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });