const daysOfWeek = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
]

// console.log(daysOfWeek)
// let dayNumber = 3
// if (dayNumber == 1)
//     console.log(daysOfWeek[dayNumber - 1])
// else if (dayNumber == 2)
//     console.log(daysOfWeek[dayNumber - 1])
// else if (dayNumber == 3)
//     console.log(daysOfWeek[dayNumber - 1])
// else if (dayNumber == 4)
//     console.log(daysOfWeek[dayNumber - 1])
// else if (dayNumber == 5)
//     console.log(daysOfWeek[dayNumber - 1])
// else if (dayNumber == 6)
//     console.log(daysOfWeek[dayNumber - 1])
// else if (dayNumber == 7)
//     console.log(daysOfWeek[dayNumber - 1])

//switch
/*
    switch(){
    case 1:
        statement
        break;
    case 2:
        statement
        break;
    case 3:
        break;
    case 4:
        break;
    case n:
        break;
    default:
        break;
    }
*/
// let dayNumber = 3
// console.log(daysOfWeek[dayNumber - 1])
// switch (dayNumber) {
//     case 1:
//         console.log(daysOfWeek[dayNumber - 1])
//         break;
//     case 2:
//         console.log(daysOfWeek[dayNumber - 1])
//         break;
//     case 3:
//         console.log(daysOfWeek[dayNumber - 1])
//         break;
//     case 4:
//         console.log(daysOfWeek[dayNumber - 1])
//         break;
//     case 5:
//         console.log(daysOfWeek[dayNumber - 1])
//         break;
//     case 6:
//         console.log(daysOfWeek[dayNumber - 1])
//         break;
//     case 7:
//         console.log(daysOfWeek[dayNumber - 1])
//         break;
//     default:
//         console.log("Day out of bound")
//         break;
// }

// HW: Write a program to determine grade
// let x = 75
// if (x < 33) {
//     console.log("F")
// }
// else if (x < 40) {
//     console.log("D")
// }
// else if (x < 50) {
//     console.log("C")
// }
// else if (x < 60) {
//     console.log("B")
// }
// else if (x < 70) {
//     console.log("A-")
// }
// else if (x < 80) {
//     console.log("A")
// }
// else if (x <= 100) {
//     console.log("A+")
// }
// else {
//     console.log("Mark is out of bound")
// }

/*
Discount amount
    < 18 -> 50%
    <= 18 <= 30 -> age%
    > 30 -> 10
*/
// const courseFee = 3499
// let discount = 0
// const age = 15

// if (age < 18 && age > 0) discount = 50
// else if (age >= 18 && age <= 30) discount = age
// else if (age > 30 && age < 100) discount = 10
// else discount = 0

// console.log(
//     `Regular Price = ${courseFee}Tk
// Discount = ${discount}%
// Price after Discount = ${Math.ceil(courseFee - courseFee * discount / 100)}Tk`
// )

//Or
const price = 1000
let discount = 0
let haveCoupon = true
let previousCustomer = true
if (haveCoupon || previousCustomer) discount = 20
else discount = 10
console.log(
    `Regular Price = ${price}Tk
Discount = ${discount}%
Price after Discount = ${Math.ceil(price - price * discount / 100)}Tk`
)