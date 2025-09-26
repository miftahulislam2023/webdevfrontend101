/*
    Arrow function
- function keyword is not used
- function name is not required
- if body of the function is a single return statement we can omit the return keyword
- if it has only one parameter then the parentheses can be omitted
*/

const square = x => x * x
console.log(square(12))

const sum = (x, y) => x + y
// const sum  = function (x, y) { return x+y}
sum(12, 65)