// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

// let a = 1;
// let b = 2;
// [a,b]=[b,a]
// console.log(a,b)

// const colors = ["red", "blue", "black", "purple"];
// [colors[0], colors[3]] = [colors[3],colors[0]]
// console.log(colors)

// const colors = ["red", "blue", "black", "purple"];
// const [firstColor,secondColor, ...extraColor] = colors
// console.log(firstColor)
// console.log(secondColor)
// console.log(extraColor)
const Person1 = {
    firstName:"Divya",
    lastName:"R",
    age:20
}
const Person2 = {
    firstName:"Aishu",
    lastName:"R",
    age:18
}
const {firstName,lastName,age} = Person2
console.log(firstName,lastName,age)