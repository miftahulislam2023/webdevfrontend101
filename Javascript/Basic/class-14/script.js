// Functions - reusable code - reusable logic
console.log(10 + 20)
console.log(12 + 3123)
console.log(12 + 3123)
console.log(12 + 1230)
console.log(1123 + 30)
console.log(12 + 30)

let celsius = 51
let farenheit = 9 / 5 * celsius + 32
console.log(farenheit)
celsius = 57
farenheit = 9 / 5 * celsius + 32
console.log(farenheit)

function functionName(parameters) {
    //statements
}

//Step-1: function define
function saySalaam() {
    console.log("Assalamu 'alaykum");
}

//Step-2: function call
saySalaam()
saySalaam()
saySalaam()
saySalaam()
saySalaam()

// Parameter - Definition
function saySalaamWithName(name) {
    console.log(`Assalamu 'alaykum ${name}!`)
}
// Argument - Call
// saySalaamWithName("Miftah")
saySalaamWithName("Abdullah")
saySalaamWithName("Abdur Rahman")
saySalaamWithName("Miftah")

function celsiusToFarenheit(celsius) {
    let farenheit = 9 / 5 * celsius + 32
    console.log(farenheit)
}

celsiusToFarenheit(23)
celsiusToFarenheit(34)

function sum(a, b) {
    console.log(a + b)
}

sum(12, 65)
sum(23, 123)
sum(22, 13)