//Truthy & Falsy values
/*
Falsy values
- false
- 0
- '' or "" or `` (empty strings)
- null
- undefined
- NaN
Common Scenarios Resulting in NaN:
    Invalid mathematical operations:
        0 / 0
        Math.sqrt(-1) (square root of a negative number)
        Infinity / Infinity
    Failed number conversions:
        parseInt("hello")
        Number("abc")
    Undefined results of operations:
        undefined + 5
        Example:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
*/
console.log(false)
// console.log(0)
if (0) {
    console.log('0')
}
if ("") {
    console.log('')
}
if (null) {
    console.log('null')
}
if (undefined) {
    console.log('undefined')
}
if (NaN) {
    console.log(`won't print`)
}

/*
Truthy values
- true
- '0'
- ' ' or " " (space)
- {} (empty object)
- [] (empty array)
- function () {}
*/

if ({}) {
    console.log("Empty object")
}
if ([]) {
    console.log("Empty array")
}
if (function () { }) {
    console.log("Empty function")
}

result = "" && "foo"; // result is assigned "" (empty string)
result = 2 && 0; // result is assigned 0
result = "foo" && 4; // result is assigned 4