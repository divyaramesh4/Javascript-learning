//function declaration = define a reusable block of code 
// that performs a task
// function hello(){
//     console.log("Hello!!!")
// }
// function expressions = a way to define functions as
//                                           values or variables
// const hello = function () {
//     console.log("hello")
// }
// hello();

// setTimeout(function(){
//     console.log("Hello")
// },3000);
//  1. Callbacks in asynchronous operations
//  2. Higher-Order Functions
//  3. Closures
//  4. Event Listeners


const num = [1,2,3,4,5,6,7,8,9]
const square = num.map(function(element){
    return Math.pow(element,3)
})
console.log(square)
