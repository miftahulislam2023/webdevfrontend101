// Function expression
/*
*/

// let square = function sq (x) {
//     return x * x;
// }

// // function square2(y) {
// //     return y * y;
// // }
// // console.log(square2)
// console.log(square)
// console.log(square(12))

// //invoking function expression just after defining it
// let squared = (function (x) {return x * x} (13))

// console.log(squared)


sumDeclaration(12, 65)
const sumExpression = function (x, y) {
    console.log(x + y)
}

sumExpression(12, 65)
function sumDeclaration(x, y) {
    console.log(x + y)
}

sumExpression = function(x, y, z) {
    console.log(x + y + z)
}

sumExpression(12, 65, 77)
