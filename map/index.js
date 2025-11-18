
// .map() = accepts a callback and applies that function 
//                 to each element of an array, then return a new array


// const num = [1,2,3,4,5]
// const squares = num.map(square)
// console.log(squares)
// console.log(num)

// function square(element){
//     return Math.pow(element,2)
// }


// const students = ["Divya", "Afreen", "Pramitha"]
// const studenttoUpperCase = students.map(upperCase);
// const studenttoLowerCase = students.map(lowercase);
// console.log(studenttoLowerCase)
// function upperCase(element){
//     return element.toUpperCase();

// }
// function lowercase(element){
//     return element.toLowerCase();
// }


const dates = ["2005-5-31","2006-11-11","2009-10-7"]

const formattedDates = dates.map(formatDates)
console.log(formattedDates)
function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`
}