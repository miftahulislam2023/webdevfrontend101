/*
Array Creation / Checking

✅ Array.from() → Creates a new array from an iterable or array-like object. (Higher-order if a mapFn is passed)

Array.of() → Creates a new array from arguments.

✅ Array.isArray() → Checks if a value is an array.

🔹 Mutator Methods (modify the original array)

✅ push() → Add elements to the end. Returns new length.

✅ pop() → Remove last element. Returns removed element.

✅ shift() → Remove first element. Returns removed element.

✅ unshift() → Add elements at the beginning. Returns new length.

✅ splice(start, deleteCount, ...items) → Add/remove elements at specific positions.

✅ reverse() → Reverse array in place.

sort(compareFn?) → Sort array. (Higher-order if custom compareFn is used)

✅ fill(value, start?, end?) → Fill with static value.

copyWithin(target, start, end?) → Copy part of array to another position.

🔹 Accessor / Non-Mutating

✅ concat() → Merge arrays. Returns new array.

✅ slice(start?, end?) → Returns shallow copy of portion.

✅ includes(value, fromIndex?) → Check if value exists.

✅ indexOf(value, fromIndex?) → First index of value.

✅ lastIndexOf(value, fromIndex?) → Last index of value.

✅ join(separator?) → Convert to string.

✅ toString() → Convert array to string.

✅ toLocaleString() → Locale-based string conversion.

✅ at(index) → Access element by index (supports negative).

🔹 Iteration / Higher-Order Methods

✅ forEach(callbackFn) → Execute function for each element. (Higher-order)

✅ map(callbackFn) → Transform elements into new array. (Higher-order)

✅ filter(callbackFn) → Return array of elements that pass test. (Higher-order)

✅ reduce(callbackFn, initialValue?) → Accumulate single value from array. (Higher-order)

reduceRight(callbackFn, initialValue?) → Same as reduce, but from right. (Higher-order)

find(callbackFn) → First element matching condition. (Higher-order)

findIndex(callbackFn) → Index of first element matching condition. (Higher-order)

findLast(callbackFn) → Last element matching condition. (Higher-order)

findLastIndex(callbackFn) → Index of last element matching condition. (Higher-order)

every(callbackFn) → Checks if all elements pass test. (Higher-order)

some(callbackFn) → Checks if at least one element passes test. (Higher-order)

flat(depth?) → Flatten nested arrays.

flatMap(callbackFn) → Map + flat (one level). (Higher-order)

✅ That’s 34 if we count flatMap, but many lists mention 33 since older versions didn’t have findLast/findLastIndex.

🔹 Summary

Higher-order methods (take a callback):
forEach, map, filter, reduce, reduceRight, find, findIndex, findLast, findLastIndex, every, some, flatMap, sort (with compareFn), Array.from (with mapFn)

*/

const numbers = []
for (let i = 1; i <= 20; i++) numbers[i - 1] = i
console.log(numbers)

// // arr.forEach(function(element) {
// //     console.log(element)
// // })

// arr.forEach((element) => console.log(element))
// arr.forEach((element) => console.log(element * element))
// arr.forEach(item => console.log(item + 2))
// let result = arr.forEach(item => item**2)
// console.log(result)

// let result = arr.map(item => item**2)
// console.log(result)
// console.log(console.log(1))

// const numbersDivisibleByThree = []
// numbers.forEach(
//     function (item) {
//         if (item % 3 == 0)
//             numbersDivisibleByThree.push(item)
//     }
// )
// numbers.forEach(
//     item => {
//         if (item % 3 == 0) numbersDivisibleByThree.push(item)
//     }
// )

// console.log(numbersDivisibleByThree)

// const numbersDivisibleByThree = numbers.filter(function (item) {
//     return (item % 3 == 0) //returns a condition
// })
// const numbersDivisibleByThree = numbers.filter(item => (item % 3 == 0) //returns a condition
// )

// console.log(numbersDivisibleByThree)
// let sum = 0
// for (number of numbers) sum += number
// console.log(sum)

// let sum = numbers.reduce(function (previousValue, currentValue) {
//     // console.log(previousValue, currentValue)
//     // console.log(currentIndex)
//     // console.log(array)
//     return previousValue + currentValue
// }, 0)

let sum = numbers.reduce((previousValue, currentvalue) => previousValue + currentvalue)
console.log(sum)

const cart = {
    item1: {
        name: 'shoe',
        price: 3000
    },
    item2: {
        name: 'watch',
        price: 12000

    },
    item3: {
        name: 'airpod',
        price: 10000

    },
    item4: {
        name: 'ipad',
        price: 80000

    },
    item5: {
        name: 't-shirt',
        price: 5000
    },
}

// sum = 0

// for(item of cart) sum += item.price
// console.log(sum)
// let cartArray = Array.from(cart)
// console.log(cartArray)

let cartArray = [
    {
        name: 'shoe',
        price: 3000
    },
    {
        name: 'watch',
        price: 12000
    },
    {
        name: 'airpod',
        price: 10000
    },
    {
        name: 'ipad',
        price: 80000
    },
    {
        name: 't-shirt',
        price: 5000
    },
]

sum = 0
// for(item of cartArray) sum+= item.price
// console.log(sum)

sum = cartArray.reduce(
    (previousValue, currentItem) => previousValue + currentItem.price
    , 0)

console.log(sum)