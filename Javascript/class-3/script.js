// naming convetntions
/*
    - letters, numbers, undescores and dollar sign $
    - can't start with number
*/

// let x = 10
// let miftah1 = 29
// let miftah2 = 29
// let miftah_3 = 29
// let miftah$4 = 29
// let miftah = 29


// naming styles
/*
    firstname - not good
    first_name - under_score
    firstName - camelCase
    FirstName - PascalCase
*/

// let x = 20
// let y = null
// let z

// let x = 10, y = null, z = undefined

// console.log(x)
// console.log(y)
// console.log(z)

// let myName = 'Miftahul Islam'
// let sentence = true
// console.log(sentence)
// console.log(myName)

// let x1 = 9999999999999998
// let x3 = 9007199254740991
// let x2 = -9999999999999998

// let bigx1 = 9999999999999999n
// let bigx3 = 9007199254740991
// let bigx2 = -9999999999999998

// console.log("Integers")
// console.log(typeof x1)
// console.log(x2)
// console.log(x3)

// console.log(typeof "Big Integers")
// console.log(typeof bigx1)
// console.log(bigx2)
// console.log(bigx3)
// console.log(typeof true)

/*
Primitive Type
- number
- string
- boolean
- null
- undefined
- bigint
- symbol
*/

//Checking type of a variable
// typeof variablename

/*
Reference Type
- Object literal
- function
- Array
*/

// Dynamic Type vs Static Type: Declaration
// JS - dynamically-typed language
// TypeScript - static-typed language
let X = 1
X = 2
console.log(typeof X)
X = 'Ok'
console.log(typeof X)
X = true
console.log(typeof X)
X = null
console.log(typeof X)
X = 1
console.log(typeof X)
X = undefined
console.log(typeof X)
X = 1n
console.log(typeof X)
X = Symbol("my")
console.log(typeof X)

//Reference types
console.log(typeof window)
X = new Array(1, 2)
console.log(X)
console.log(typeof [1, 2, 3]) //square bracket
console.log(typeof function(){})

