// function hello(){
//     console.log("Hello")
// }

// const hello = function(){
//     console.log("Hello")
// }

// const hello = (name, age) => {console.log(`Hello ${name}!!!`);
//                          console.log(`You are ${age} year old`)
// }

// hello("Divya", 20);

// setTimeout(() =>
//     console.log("Hello")
// ,300 )


const num = [1,2,3,4,5,6,7]

const squares = num.map((element) => Math.pow(element,2))
const cubes = num.map((element) => Math.pow(element,3))
const evenNums = num.filter((element) => element%2 === 0)
const oddNums = num.filter((element) => element%2 !== 0)

console.log(oddNums)

