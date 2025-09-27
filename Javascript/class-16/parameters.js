/*
    Function parameters
*/

// function sortTwoNumbers(x, y) {
//     if(x > y) {
//         console.log(y)
//         console.log(x)
//     }
//     else if(x < y) {
//         console.log(x)
//         console.log(y)
//     }
// }

// sortTwoNumbers(12, 65)
// sortTwoNumbers(65, 13)
// sortTwoNumbers(-10, 110)
// sortTwoNumbers(-10, -110)


// function sortThreeNumbers(x, y, z) {
//     if(x < y && x < z) {
//         console.log(x)
//         if(y < z) {
//             console.log(y)
//             console.log(z)
//         }
//     }
//     // else if(x < )
// }

/*
    x < y < z
    x < z < y
    y < x < z
    y < z < x
    z < x < y
    z < y < x
    x = y < z
    y = z < x
    z = x < y
    x < y = z
    y < z = x
    z < x = y
    x = y = z
*/

// const x = [12, 65, -10, 1, -13, 45, 110, -459]
// function sort(numbers) {
//     const length = numbers.length
//     // console.log(length)
//     let temp = numbers[0]
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - i; j++) {
//             // console.log(i, j)
//             if (numbers[j] > numbers[j + 1]) {
//                 temp = numbers[j]
//                 numbers[j] = numbers[j + 1]
//                 numbers[j + 1] = temp
//             }
//         }
//     }
//     // console.log(numbers)
// }
// // 8,
// // 7,
// // 6,
// // 5,
// // 4,
// // 3,
// // 2,
// // 1

// sort(x)

// console.log(x)

function generateRollNumber(sscYear, batchName, gender = 'Male') {
    // console.log(gender.toLowerCase())
    return (`${sscYear}${batchName[0]}${gender.toLowerCase() === 'male' ? 'M' : 'F'}`)
}

console.log(generateRollNumber(2025, 'Dynamite', 'Male'))
console.log(generateRollNumber(2023, 'Booster', 'Female'))
console.log(generateRollNumber(2023, 'Booster'))

function area(height, width = height * 2) {
    let area = height * width
    console.log(area)
}

area(12, 12)

