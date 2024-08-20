//  javascript Array and It's Method 

// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

{
    let arra = []
    console.log(arra);
    array[0] = "html"
    console.log(arra);
    array[1] = "css"
    console.log(arra);
    array[2] = "javascript"
    console.log(arra);
    array[3] = "reactjs"
    console.log(arra);
    console.log(arra.length);
    array.length = 50
    console.log(arra);
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[1] === undefined);
    console.log(arra.entries(array));
}

// Array Constructor Method

{
    let arr = new Array(10 , 20)

    console.log(arr);

    console.log(arr.length);

    let arr1 = [2]

    console.log(arr1);

    console.log(arr1.length);
}

// Javascript Array.at() Method

// The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

// at(index)

{
    let arr = ['html', 'css', 'javascript', 'reactjs']

    let At = array.at(6)
    let At1 = array.at(-6)

    console.log(At);
    console.log(At1);
}

// Javascript Array.concat() Method

// The concat() method is used to merge two or more arrays. It does not change the existing arrays, but instead returns a new array.

// concat()
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)
