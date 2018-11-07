console.log('Starting app');

// Set Timeout function
// Callback function
setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Second Timeout Function');
}, 0);

console.log('Finishing up');