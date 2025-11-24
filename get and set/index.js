// // getter = special method that makes a property readable
// // setter = special method that makes a property writeable

// // validate and modify a value when reading/writing a property

// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth
//         }
//         else{
//             console.log("Width must be a positive number")
//         }
//     }
//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight
//         }
//         else{
//             console.log("Height must be a positive number")
//         }
//     }
//     get width(){
//         return this._width;
//     }
//     get height(){
//         return this._height;
//     }
//     get area(){
//         return this._width * this._height;
//     }
// }
// const rectangle = new Rectangle(5,45)
// rectangle.width = 56

// console.log(rectangle.height,rectangle.width, rectangle.area)

class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    set firstname(newFirstname){
        if(typeof newFirstname=== "string" && newFirstname.length>0){
            this._firstname = newFirstname;
        }
        else{
            console.log("First name must be non Empty String");
        }

    }
     set lastname(newLastname){
        if(typeof newLastname=== "string" && newLastname.length>0){
            this._lastname = newLastname;
        }
        else{
            console.log("Last name must be non Empty String");
        }
        
    }
    set age(newAge){
        if(typeof newAge=== "number" && newAge>0){
            this._age =newAge;
        }
        else{
            console.log("Age must be non negative number");
        }
        
    }
    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname;
    }
    get Age(){
        return this._age;
    }
    get fullName(){
        return this._firstname+" "+ this._lastname;
    }
}
const person = new Person("Divya","R",6)
console.log(person.firstname, person.lastname, person.Age);
