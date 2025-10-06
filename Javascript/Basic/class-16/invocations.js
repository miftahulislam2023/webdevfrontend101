/*
Funtcion invocation methods
- As functions
- As methods - function used as a property of an object
- As constructors
*/

// //Calling as a function
// function sum(x, y) {
//     console.log(x + y)
// }

// sum(12, 65)

// //Calling as a method
// const number = {
//     type: "Integer",
//     sum: function (x, y) {
//         console.log(x + y)
//     }
// }
// number.sum(12, 65)

// //Calling as constructor
// const array = new Array(12, 65, 54)
// console.log(array)

//Method chaining
/*
Step 1: Square
Step 2: Square + 120
Step 3: Add A as prefix
*/

// function square(x) {
//     return x * x;
// }

// function add120(x) {
//     return x + 120;
// }

// function addSuffix(x) {
//     return 'A' + x;
// }


let codeGenerator = {
    value: 12,
    square: function () {
        this.value = this.value * this.value;
        return this;
    },
    add120: function () {
        this.value = this.value + 120;
        return this;
    },
    addSuffix: function (x) {
        this.value = 'A' + this.value;
        return this;
    },
}
// console.log(codeGenerator)
// codeGenerator.square();
// console.log(codeGenerator)
// codeGenerator.add120()
// console.log(codeGenerator)
// codeGenerator.addSuffix()
console.log(codeGenerator)
// console.log(codeGenerator.square())
codeGenerator.square().add120().addSuffix()
console.log(codeGenerator)


// function codeGenerator(x) {
//     let y = x * x;
//     y = y + 120;
//     y = 'A' + y
//     console.log(y)
// }

// codeGenerator(12)
// codeGenerator(15)

// let obj = {
//     shortName: "Miftah",
//     gender: 'Male',
//     address: 'Rajshahi',
//     showInfo: function() {
//         console.log(typeof this)
//         console.log(this)
//         // console.log(this.shortName, this.gender, this.address)
//     }
// }

// obj.showInfo()