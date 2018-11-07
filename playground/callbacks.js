// Callback Functions

// Contrived Example
let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Malichi'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(30, (userObj) => {
    console.log(userObj);
});