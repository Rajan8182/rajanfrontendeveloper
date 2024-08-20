// Javascript Loops

// Increment , Decrement

/*

    while Loop
    do...while Loop
    for Loop
    for...in Loop
    for...of Loop

*/

// while Loop

/*
  while(condition){
    statement;
    afterThought
  }
*/

// {
//     let count = 0
//     while(count <= 10){
//         // console.log(count);
//         console.log(`while Loop count ${count}`);
//         count++;
//     } 
// }

// do...while Loop

/*
  do {
    statement;
    afterthought
  } while(condition);

*/

// {
//     let count = 0
//     do {
//         // console.log(count);
//         console.log(`do...while Loop count ${count}`);
//         count++;
//     } while(count < 5); 
// }

// for Loop In Javascript

/*
  for(initialization; condition; afterthought){
    statement;
  }
*/

// {
//     let count = 3
//     for(count; count < 10; count++){
//         console.log('For Loop IN Javascript');
//         console.log(count += count);
//     }
// }

// For-in Loop

// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

// for (variable in object)
//     statement
  
{

    // Object = key + value
    // let obj = {key1:'one' , key2:'two' , key3:'three' , key4:'four' , key5:'five' , key6:'six'}


    // let obj = {key1:'one' , key2:'two' , key3:'three' , key4:'four' , key5:'five' , key6:'six'}
    
    // console.log(obj);
    // obj.key1 = 'two'
    // console.log(obj);
    // console.log(obj.key1);
    // console.log(obj['key1']);
    // obj.key2 = 'two'
    // console.log(obj);
    // obj.key2 = 'three'
    // console.log(obj);


    // console.log(obj.key1);
    // console.log(obj.key2);
    // console.log(obj.key3);
    // console.log(obj.key4);
    // console.log(obj.key5);
    // console.log(obj.key6);

    // // for(initialization in Object){
    // //     statement;
    // // }


    // for(let props in obj){
    //     console.log(props);
    //     console.log(obj[props]);
    // }

}

// For-of Loop

// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

// for (variable of iterable)
//     statement
  

{
    
    // let array = []
    // console.log(array);

    // array.length = 10
    // console.log(array);

    //     array[4] = 40
    //     array[3] = 30
    //     array[2] = 20

    //     console.log(array);


    //     let newArray = ['html' , 'css' , 'bootstrap' , 'sass' , 'tailwindcss' , 'javascript' , 'reactjs']

    //     console.log(newArray);

    //     console.log(newArray[0]);
    //     console.log(newArray[1]);
    //     console.log(newArray[2]);
    //     console.log(newArray[3]);
    //     console.log(newArray[4]);

    //     for(let value of newArray){
    //         console.log(`${value}`);
    //     }

    //     let num =[10 , 20 , 30 , 40 , 50]

    //     for(let i of num){
    //         console.log(i*2);
    //     }

    //     let str = ['this is string!']
        
    //     console.log(str);

    //     for(let value of str){
    //         console.log(i);
    //     }

}