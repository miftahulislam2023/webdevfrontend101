/*Loops in JavaScript are used to repeatedly execute a block of code
until a specified condition is no longer met. They are fundamental for
tasks such as iterating over data structures, performing actions
multiple times, or processing a series of values.

Here are the main types of loops in JavaScript:
for loop: This loop is used when the number of iterations is known beforehand.
It consists of an initialization, a condition, and an increment/decrement expression.
JavaScript

    for (let i = 0; i < 5; i++) {
        console.log(i); // Outputs 0, 1, 2, 3, 4
    }

* while loop: This loop executes a block of code as long as a specified condition
evaluates to true. The condition is checked before each iteration.
JavaScript

    let count = 0;
    while (count < 3) {
        console.log(count); // Outputs 0, 1, 2
        count++;
    }

* do...while loop: Similar to the while loop, but the code block is executed at
least once before the condition is checked.
JavaScript

    let x = 0;
    do {
        console.log(x); // Outputs 0
        x++;
    } while (x < 0); // Condition is false, loop exits after first iteration

for...in loop: This loop iterates over the enumerable string properties of an object.
JavaScript

    const person = { name: "Alice", age: 30 };
    for (const key in person) {
        console.log(`${key}: ${person[key]}`); // Outputs "name: Alice", "age: 30"
    }

for...of loop: This loop iterates over iterable objects such as arrays, strings, Maps, Sets, and NodeLists.
JavaScript

    const colors = ["red", "green", "blue"];
    for (const color of colors) {
        console.log(color); // Outputs "red", "green", "blue"
    }

Additionally, break and continue statements can be used within loops to control their flow:
break: Terminates the loop entirely.
continue: Skips the current iteration and proceeds to the next one.
*/

// Repetitive -> Loop

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// let i = 1; while(i <= 10) console.log(i++)
// // i = 5; while(i <= 5*10) console.log(i+=5)
// i = 5
// while(i <= (5*10)){
//     console.log(i)
//     i += 5 //i = i + 5
// }

// loop control variable
// while(condition) {
//     statements
//     increment/decrement/change
// }

// let i = 1
// while (i <= 100) {
//     console.log(i)
//     i++
//     console.log(i <= 100)
// }

// console.log("Current value of i is", i)

// do while
/*
loop control variable
do {
    statements
    increment/decrement/change
} while (condition)
*/

// let i = 1
// do {
//     console.log(i)
//     i++
// } while (i < 101)


// Calculator
// let input = prompt("Enter two numbers: ")
// console.log(input)
// let numbers = input.split(' ')

// let i = 0
// while (i < numbers.length) {
//     numbers[i] = parseFloat(numbers[i])
//     i++
// }
// console.log(
//     `
//     1. Summation
//     2. Subtraction
//     3. Multiplication
//     4. Division
//     `
// )
// let operation = window.prompt("Enter your choice:")
// do {
//     if(operation != 1 && operation != 2 && operation != 3 && operation != 4) {
//         console.log("Invalid choice. Please try again")
//         operation = window.prompt("Enter your choice:")
//     }
//     else {
//         break;
//     }
// } while (true)

// switch (parseInt(operation)) {
//     case 1:
//         console.log(numbers[0] + numbers[1])
//         break;
//     case 2:
//         console.log(numbers[0] - numbers[1])
//         break;
//     case 3:
//         console.log(numbers[0] * numbers[1])
//         break;
//     case 4:
//         console.log(numbers[0] / numbers[1])
//         break;
//     default:
// }
// console.log(typeof x)
// let input = '12 65 63'
// console.log(numbers)

// for
// for(loop control variable; condition; increment/decrement/change) {
//     statements
// }

// for(let i = 1; i > -100; i--) {
//     console.log(i)
//     // if(i == 50) break
// }

//break
// let i = 1
// while(i <= 100) {
//     console.log(i++)
//     if(i == 50) break;
// }

for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        continue
        console.log("It won't be printed")
    }
    console.log(i)
}

let i = 1
while (i <= 100) {
    if (i % 2 != 0) {
        i++
        continue
        console.log("It won't be printed")
    }
    console.log(i)
    i++
}

i = 1
do {
    if (i % 2 != 0) {
        i++
        continue
        console.log("It won't be printed")
    }
    console.log(i)
    i++
} while (i <= 100)