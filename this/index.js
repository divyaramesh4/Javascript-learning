const person = {
    firstname:"Divya",
    lastname: "R",
    favfood:"Pizza",
    sayHello: function(){
        console.log(`Hi I am ${this.lastname}`)
    },
    eat: function(){console.log(`I am eating ${this.favfood}`)},
}
person.sayHello()
person.eat()