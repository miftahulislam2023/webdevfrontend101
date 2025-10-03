/*
A Higher Order Function is a function that
- Takes one or more functions as arguments (callback functions)
- Returns a function as its result.

* In JavaScript a function can be treated as a value
* Functions are objects meaning it can have its own properties and methods
*/
// const f = function (a, b) {
//     return a + b
// }
const f = (a, b) => a + b
console.log(f.toString())
const g = f
console.log(g)

// Higher Order Array Methods
const s1 = [1, 2, 3, 4].toString();
console.log(s1)
const s2 = [1, 2, 3, 4].join('*');
console.log(s2)

let arr = [1, 2, 3, 4, 5]
arr.fill(10, 2, 4)
console.log(arr)
let arr1 = arr.concat([6, 7, 8])
console.log(arr1)
console.log(arr1.slice(1, 3))
console.log([12].toLocaleString('bn-BD'))
console.log([12].toLocaleString('ar-EG'))
console.log(arr1.at(-2))
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

forEach(callbackFn) → Execute function for each element. (Higher-order)

map(callbackFn) → Transform elements into new array. (Higher-order)

filter(callbackFn) → Return array of elements that pass test. (Higher-order)

reduce(callbackFn, initialValue?) → Accumulate single value from array. (Higher-order)

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