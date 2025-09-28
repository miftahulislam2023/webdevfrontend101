//Variable length parameter - rest operator
// function saySalaam(...name) {
//     console.log(name)
//     console.log(name.toString())
//     console.log(`${name}`)
//     console.log(`Assalamu 'alaykum ${name}`)
// }

// saySalaam('Miftah')
// saySalaam('Abdullah')
// saySalaam('Miftah', 'Abdullah')


function sumAllNumbers(...numbers) {
    let sum = 0
    for (number of numbers)
        sum += number
    console.log(sum)
}

sumAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

//Spread operator in argument - ...
/*
 It expands an array or iterable into individual arguments when calling a function
*/

function sumThreeNumbers(a, b, c) {
    let sum = a + b + c;
    console.log(a, b, c)
    console.log(sum)
}

sumThreeNumbers(...[23, 12, 45])