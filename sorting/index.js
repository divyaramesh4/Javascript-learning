// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings
// let fruits = ["apple", "mango","pomogranate", "coconut"];


// const num = [1,5,5,63,8,2]
// console.log(num.sort((a,b) => a-b))


const people = [{
    name:"Spongebob",
    age:56,
    gpa:2.0
},
{
    name:"Divya",
    age:20,
    gpa:4.0
},
{
    name:"Aishu",
    age:18,
    gpa:3.9
}
]
// console.log(people.sort())
people.sort((a, b) => b.gpa - a.gpa);
console.log(people)
// console.log(people.sort((a, b) => a.age - b.age));
