// Javascript promises

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// Promises Exampels

const promise = new promise(function(resolve , reject){
    setTimeout(() => {
        resolve('Success!'); // fulfilled
    }, 1000)
})
promise.then((result) => {
    console.log(result);
})
.then(() => {
    console.log('And After Effect');
})
.then(() =>{
    console.log('And Second  After Effect');
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('Finally Promise complete.');
})


// Catch

// The catch() method of Promise instances schedules a function to be called when the promise is rejected. It immediately returns another Promise object, allowing you to chain calls to other promise methods. It is a shortcut for

// Then

//The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. It immediately returns another Promise object, allowing you to chain calls to other promise methods


// Finally

// The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected). It immediately returns another Promise object, allowing you to chain calls to other promise methods.


let promises = new promise(function(resolve , reject){
    let kayo = 'healthy'
    if(kayo === 'healthy'){
        resolve();
    }else{
        reject('Kayo is Sick!!!');
    }
})

promises.then(() => {
    console.log('Kayo is Healthy!!!');
}).then(() => {
    console.log('I have a Cake And I Am Happy!!!');
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('I Still HAve A party!!@@');
})

// async and await 

// We use the async keyword with a function to represent that the function is an asynchronous function. the async function returuns a promise

// The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or at the top level of a module.

// async function name(param0) {
//     statements
//   }
//   async function name(param0, param1) {
//     statements
//   }
//   async function name(param0, param1, /* …, */ paramN) {
//     statements
//   }
  