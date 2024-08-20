// Javascript Array.filter() Method

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

{
  //   let array = ["html", "css", 'javascript' , 'sass' , 'devlopment']

  //   let result = array.filter((subject) => subject.length > 5)

  //   console.log(result); // Output: ['javascript', 'sass', 'development']

  let num = [20, 25, 35, 89, 95, 7];

  let numresult = num.filter((item) => item < 50);

  let mapresult = numresult.map((item) => item * 2);

  console.log(numresult);

  console.log(mapresult);
}

// Javascript Array.slice Method

{
  let array = ["html", "css", "javascript", "sass", "devlopment"];

  let result = array.slice(1, 3);

  console.log(result); // Output: ['css', 'javascript']
}

// Javascript Array.shift Method

{
  let array = ["html", "css", "javascript", "sass", "devlopment"];

  array.shift();
  array.shift();
  array.shift();

  console.log(array); // Output: ['sass', 'devlopment']
}

// Javascript Array.pop() Method

{
  let array = ["html", "css", "javascript", "sass", "devlopment"];

  array.pop();
  array.pop();
  array.pop();

  console.log(array); // Output: ['html', 'css']
}

// Javascript Array.push() Method

{
  let array = ["html", "css", "javascript", "sass", "devlopment"];

  array.push("reactjs");
  array.push("angularjs");

  console.log(array); // Output: ['html', 'css', 'javascript','sass', 'devlopment','reactjs', 'angularjs']
}

// Javascript Array.unshift() Method

{
  let array = ["html", "css", "javascript", "sass", "devlopment"];

  array.unshift("reactjs");
  array.unshift("angularjs");

  console.log(array); // Output: ['angularjs', 'reactjs', 'html', 'css', 'javascript','sass', 'devlopment']
}

// Javascript Array.tostring() Method

{
    let array = ["html", "css", "javascript", "sass", "devlopment"];

    let result = array.toString();

    console.log(result); // Output: html,css,javascript,sass,devlopment
}

// Javascript Array.sort() Method

{
    let array = ["html", "css", "javascript", "sass", "devlopment"];

    let result = array.sort();
    console.log(result); // Output: ['css', 'devlopment', 'html', 'javascript','sass']

    let num = [20, 25, 35, 89, 95, 7];

    let numresult = num.sort((a, b) => a - b);
        console.log(numresult); // Output: [7, 20, 25, 35, 89, 95]
}

// Javascript Array.reverse() Method

{
    let array = ["html", "css", "javascript", "sass", "devlopment"];

    let result = array.reverse();

    console.log(result); // Output: ['devlopment','sass', 'javascript', 'css', 'html']
}

// Javascript Array.some() Method

// array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

{
    let array = [1, 2, 3, 4, 5];

    let result = array.some((value) => value > 3);

    console.log(result); // Output: true
}

// Javascript Array.find() Method

// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// find(callbackFn)
// find(callbackFn, thisArg)

{
    let array = [165  , 352 , 144 , 132 , 352 , 545];

    let result = array.find((item) => item == 352);

    console.log(result);
}

// 