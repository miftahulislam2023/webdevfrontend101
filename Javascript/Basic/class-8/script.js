//Object literal
let miftah = {
    fullName: "Miftahul Islam",
    age: 28,
    institute: "RUET",
    isMarried: true,
    "Tech Stack": "C, C++, Java, Python, Javascript, Dart",
    address: {
        thana: "Rajpara",
        city: "Rajshahi"
    }
}

// console.log(person)

// console.log(typeof person)
// //dot notation
// console.log(person.fullName)
// console.log(person.age)
// console.log(person.institute)
// console.log(person.isMarried)

// //object[key]
// console.log(person["fullName"])
// console.log(person["age"])
// console.log(person["institute"])
// console.log(person["isMarried"])

// console.log(person["Tech Stack"])

// //update
// person.age = 35
// console.log(person.age)

// //add
// person.school = "RAJ"
// console.log(person)

// //delete
// delete person.school
// console.log(person)

//nested object
let suvo = {
    fullName: "Suvo",
    age: 28
}

let miftahCoding = {
    CEO: miftah,
    CTO: suvo,
    netWorth: "100M"
}

console.log(miftahCoding)
