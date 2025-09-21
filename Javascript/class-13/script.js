/*
    while
    do while
    for
    for async
    for of
    for in
*/

//for of - iterable object
/*
- array
- string
- set
- map
*/

// let array = [1, 2, 3, 4, 5]
// for(let i = 0; i < array.length; i++)
//     console.log(array[i])
// for(let arrayItem of array)
//     console.log(arrayItem)

// let person = {
//     'age': 10,
//     'name': 'Miftah',
//     colorBlind: false
// }
// console.log(Object.keys(person))
// for(let key of Object.keys(person))
//     console.log(key)

/*
for of loop
for (variable in object) {
  // code to be executed for each enumerable property
}
*/

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25
};

for (let key in person) {
    console.log(key)
//   console.log(`${key}: ${person[key]}`);
}

const numbers = [45, 4, 9, 16, 25];

for (let x in numbers) {
  console.log(x)
}

