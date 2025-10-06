//object literal/object initializer
// const apple = {
//     color: "Red",
//     weight: 150
// }
let apple = new Object({
    color: "Red",
    weight: 150
})
// console.log(apple)

//object constructor
let mango = new Object()
mango.color = 'green'
mango.isRotten = false
mango.weight = 200

// console.log(mango)
// console.log(mango.hasOwnProperty("color"))
// console.log(mango.hasOwnProperty("height"))

// let fruits = {
//     ...mango,
//     ...apple, 
// }

// let fruits = Object.assign(apple, mango)

// console.log(fruits)

console.log(typeof (Object.keys(apple)))
console.log(typeof (JSON.stringify(mango)))
console.log(JSON.stringify(mango))
console.log(Object.entries(apple)[0])

// JSON - JavaScript Object Notation