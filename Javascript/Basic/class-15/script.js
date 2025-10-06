// Function Declaration
/*
    - function keyword
    - identifier
    - parentheses (paramaters)
    - curly braces {statements}
*/

function square(x) {
    // console.log(x * x)
    return [x * x, x * x * x];
}

//nested function
// function printSquares() {
//     for(let i = 1; i <= 20; i++)
//         square(i)
// }

// printSquares()

let [squareResult, cubeResult] = square(4)
console.log(squareResult, cubeResult)
// console.log(squareResult)
// console.log(square(20))

// let x = 10
// let y = 20

// let x = 10, y = 20
// let [x , y, z] = [10, 20, 50]
// console.log(x, y, z)

// let [x, , z] = [10, 20, 30]
// console.log(x, z)