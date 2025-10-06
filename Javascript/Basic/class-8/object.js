//spread operator ...

// let person1 = {
//     name: 'Miftah',
//     age: 25,
//     city: 'New York'
// }

// let person2 = {
    //     name: 'John',
    //     age: 30,
    //     city: 'Los Angeles'
    // }
    
// let persons = {
//     person1, person2
// }

// let address = {
    //     thana: "Rajpara",
    //     zilla: "Rajshahi"
    // }
    
    // let phone = {
        //     countryCode: "+880",
        //     number: 1742855755
        // }
        
        // //We can skip key name if value variable assigned to it holds the same name
        // let person1 = {
            //     name: 'Miftah',
            //     age: 25,
            //     city: 'New York',
            //     phone,
            //     address
            // }
            
            // let person2 = {
                //     name: 'Miftah',
                //     age: 25,
//     city: 'New York',
//     ...phone,
//     ...address
// }

// console.log(person1)
// console.log(person2)

//Object destructuring
let person1 = {
    name: 'Miftahul Islam',
    age: 25,
    city: 'New York'
}

// let name = person1.name
// name = person1['name']
let {name:fullName, age, city:myCity} = person1

console.log(fullName, age, myCity)