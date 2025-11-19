
// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                                 function()}

const person1 = {
    firstname:"Divya",
    lastname: "R",
    age:20,
    isEmployed:true,
    sayHello: function(){
        console.log("Hi I am Divya")
    },
    eat: function(){console.log("I am eating a Krabby Patty")},
}

const person2 = {
    firstname:"Divi",
    lastname: "R",
    age:20,
    isEmployed:true,
}

// console.log(person1.firstname)
// console.log(person1.lastname)
// console.log(person1.age)
// console.log(person1.sayHello())

// console.log(person2.firstname)
// console.log(person2.lastname)
// console.log(person2.age)
// console.log(person2.isEmployed)
person1.sayHello()
person1.eat()
