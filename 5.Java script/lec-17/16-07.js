// Javascript CallBack Hell

// CallBack function 

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

{
    // function sum(CallBack) {
    //     return(
    //         console.log('Hello'),
    //         CallBack()
    //     )
    // }

    // function Print(){
    //     return console.log('World')
    // }

    // sum(Print)

}


// IIFE => [Immediately Invoked Function Expression]

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog

{
    // (function greek () {
    //     return console.log('Hello Im Raju');
    // })()

    // Output : Hello Im Raju

    // const sum = (() => console.log(IIEF))()

    // Output : Hello Im Raju
 
}

// Constructor Function 

// The constructor method is a special method of a class for creating and initializing an object instance of that class.

// constructor() { /* … */ }
// constructor(argument0) { /* … */ }
// constructor(argument0, argument1) { /* … */ }
// constructor(argument0, argument1, /* …, */ argumentN) { /* … */ }

{
    // let array  = [10 , 20 , 30]

    // let array1 = [...array]

    // console.log(array1);

    // function sum(x , y , z){
    //     return console.log(x + y + z);
    // }

    // sum(...array)

}


// Kitchen Pinchin 7 Steps to Making your Own Pizza

// Start with a crust. ...
// Add a sauce. ...
// Add some veggies, such as: ...
// Try some fruit on your pizza, such as: ...
// Add some protein, such as: ...
// Add cheese. ...
// Bake your creation in a hot oven (450 F or above).

{

    let store = 'open'

    function Pizzarecipe() {
        if(store == 'open'){
           setTimeout(function step1(){
                console.log('Start with a crust. ...');
                setTimeout(function step2(){
                    console.log('Add a sauce. ...');
                    setTimeout(function step3(){
                        console.log('Add some veggies, such as: ...');
                        setTimeout(function step4(){
                            console.log('Try some fruit on your pizza, such as: ...');
                            setTimeout(function step5(){
                                console.log('Add some protein, such as: ...');
                                setTimeout(function step6(){
                                    console.log('Add cheese. ...');
                                    setTimeout(function step7(){
                                        console.log('Bake your creation in a hot oven (450 F or above).');
                                        setTimeout(function step8(){
                                             console.log('Pizza is ready');
                                        }, 2000)
                                    }, 6000) 
                                }, 5000) 
                            }, 3000) 
                        }, 2000) 
                    }, 3000)
                },3000)
           }, 2000) 
        }else{
            console.log('Pizza is not available in this store');
        }
    }

    Pizzarecipe()

}