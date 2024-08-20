// Javasript String.inlude() Method 

// The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

// includes(searchString)
// includes(searchString, position)

{
    // let str = "This is string Includes Method!"
    // //         012345678901234567890123456789

    // let inludes = str.inludes('string' , 8)

    // console.log(inludes);

}

// javascript string.replace() Method

// The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

// replace(pattern, replacement)


{
    // let str = 'This is Dog and dog are very cute but Dog sometimes Danger! and THis cat but cat is danger!'

    // console.log(str);

    // let regex1 = /dog/i
    // let regex2 = /dog/g

    // let Replace = str.replace(regex1 , 'Cat')

    // console.log(Replace);

}


// Javascritp string.replaceAll() method 

// The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

// replaceAll(pattern, replacement)

{
    // let str = 'This is Dog and dog are very cute but Dog sometimes Danger! and THis cat but cat is danger!'

    // let ReplaceAll = str.replaceAll('Dog' , 'cat')

    // console.log(ReplaceAll);

}

// Javascript string.toUppercase() / string.toLowercase()  Method

{
    // let str = 'This is Dog and dog are very cute but Dog sometimes Danger!'

    // let toUppercase = str.toUppercase()

    // let toLowercase = str.toLowercase()

    // console.log(toUppercase);

    // console.log(toLowercase);

}

// Javascript string.repeat() Method

// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together

// repeat(count)

{
    // let x = 'Hello'

    // let Repeat = x.repeat(10)

    // console.log(Repeat);

}

// Javascript string.search() Method

// The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.

// search(regexp)


{

    // let str = 'This is String Search Method'

    // let Regex = /This/g

    // let Search = str[str.search(Regex)]

    // console.log(Search);

}

// Javascript string.match() And Strimg.matchAll()  Method

// The match() method of String values retrieves the result of matching this string against a regular expression.

// The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.

// match(regexp)

// matchAll(regexp)


{
    // let str = 'This is string Match Method!'

    // let regex = /[A-Z]/g

    // let Match = Str.match(regex)

    // let MatchAll =[...str.matchAll(regex)]

    // console.log(Match);   //return Array

    // console.log(MatchAll);  //return Iterator

}


{
    // let str = 'This is string'

    // let str2 = [...str]

    // console.log(str2);
}