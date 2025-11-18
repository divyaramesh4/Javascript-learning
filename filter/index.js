// .filter() = creates a new array by filtering out
//                 elements with a callback

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let OddNums = numbers.filter(isOdd);
// console.log(OddNums)
// function isEven(element) {
//     return element % 2 === 0
// }
// function isOdd(element) {
//     return element % 2 !== 0
// }

// const ages = [12,13,17,19,20,2,-1];
// const Adults = ages.filter(isAdult);
// const child = ages.filter(isChild);
// console.log(child);
// console.log(Adults)
// function isAdult(element){
//     return element>=18;
// }

// function isChild(element){
//     return element<18;
// }

const words = ["apple","mango","grapes","pomogrenate"];
const shortWords = words.filter(getShortWords);
console.log(shortWords)
function getShortWords(element){
    return element.length <= 5
}