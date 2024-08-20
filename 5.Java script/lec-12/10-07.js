//  Javascript this Keyword

{
    let x = this
    console.log(x); // Output: Window {postMessage: ��, blur: ��, focus: ��, close: ��, parent: Window, …}
}

{
    let profile = {
        FirstName:'Rajan',
        LastName:'chovatiya',
        Age:21,
        innerFunc:function(){
            console.log(`my FirstName is ${this.FirstName} and my LastName is ${this.LastName} and Age is ${this.Age}`);
        }
    }
    profile.innerFunc(); // Output: my FirstName is Rajan and my LastName is Chovatiya and Age is 21

}

{
    function profile() {
        let name = {
            names:'Raju'
        }
        return console.log(`${this.FirstName}`);
    }
    
    profile(); // Output: undefined
}

// Javascript Object Method

// The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

{
    let names = {
        name1:'Rajan',
        name2:'Darvish',
        name3:'Meet',
        name4:'Avi'
    }

    console.log(names.name1);
    console.log(names.name2);
    console.log(names.name3);
    console.log(names.name4);

    console.log(names["name1"]);
    console.log(names["name2"]);
    console.log(names["name3"]);
    console.log(names["name4"]);

}

// Javascript Object assign() Method

// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.

// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)


{
    let obj1 = {
        value1: 'objectAssign1'
    }
    let obj2 = {
        value2: 'objectMethods'
    }

    let boj = Object.assign(obj1,obj2)

    console.log(boj); // Output: { value1: 'objectAssign1', value2: 'objectMethods' }

    console.log(obj1); // Output: { value1: 'objectAssign1', value2: 'objectMethods' }
    
}

// Javascript Object.create() Method

// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

// Object.create(proto)
// Object.create(proto, propertiesObject)

{
    let profile = {
        FirstName: "Rajan Chovatiya",
        FullName: function() { 
            console.log(`${this.firstName}`);
        }
    }

    profile.FirstName ()
    let SecondProfile = object.create(profile)

    SecondProfile.FirstName = "Darvish Baladha"

    profile.FullName()

    console.log(profile);
   
    console.log(SecondProfile);

    SecondProfile.FullName()

}