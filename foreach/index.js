// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element*2;
// }
// function triple(element, index, array){
//     array[index] = element*3;
// }
// function square(element, index, array) {
//     array[index] = element * element;
// }
// function display(element) {
//     console.log(element);
// }


let fruits = ["apPle", "manGo", "ORange"];
fruits.forEach(capitalize);
fruits.forEach(display);

function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}
function lowercase(element, index, array){
    array[index] = element.toLowerCase();
}
function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}


function display(element) {
    console.log(element);
}

let arr = [,,,];
console.log(arr.length)