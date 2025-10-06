//Number methods and properties
// let x = 1000.56489012
// console.log(x.__proto__)
// let s = x.toString()
// s = x.toLocaleString('ar-EG')
// s = x.toLocaleString('bn-IN')
// s = x.toFixed(2)
// s = x.toPrecision(8)
// s = x.valueOf()
// s = x.toExponential(4)
// console.log(s)

//Math - DateTime
// console.log(Math)
// let x = Math.cos(Math.PI / 180 * 60)
// console.log(Math.floor(x))
// console.log(Math.ceil(x))

// let s = Math.sqrt(16)
// s = Math.pow(2, 5)

// //Math.random()
// s = Math.floor(Math.random() * 10)
// console.log(s)


//Datetime
let now = new Date()

console.log(now.__proto__)
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getFullYear())
console.log(now.getTimezoneOffset())
console.log(now.getUTCDate())

// now.setFullYear(2035)
console.log(now.toDateString())
console.log(now.toLocaleDateString('bn-BN'))