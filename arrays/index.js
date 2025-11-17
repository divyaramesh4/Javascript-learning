let fruit = ["apple", "mango", "orange"];
fruit[1] = "coconut"
fruit.push("grapes","pompgranate")
// fruit.pop()
// fruit.unshift("kiwi")
// fruit.shift()
// console.log(fruit)
// console.log(fruit[0])
// console.log(fruit[1])
// console.log(fruit[2])
// console.log(fruit.length)
// console.log(fruit.indexOf("apple"))
// for( i = 0;i<fruit.length;i++){
//     console.log(fruit[i])
// }
// fruit.sort().reverse();
for (f of fruit){
    console.log(f)
}