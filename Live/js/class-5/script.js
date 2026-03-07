const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length)

const squareNumbers = numbers.map(
    number => number**2
)

console.log(squareNumbers)

const filteredNumbers = numbers.filter(
    number => number % 2 == 0
)

console.log(filteredNumbers)