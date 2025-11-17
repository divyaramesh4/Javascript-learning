// function openFridge(...foods){
//     console.log(foods);
// }
// const food1 = "pizza";
// const food2 = "momos";
// const food3 = "sushi";
// const food4 = "pasta";
// const food5 = "ramen";

// openFridge(food1,food2,food3,food4,food5);

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result/numbers.length;
}
function combineStrings(...strings){
    return strings.join(" ");
}

const total = sum(1,2,3,4,4,2);
const avg = getAverage(1,2,3,4,5);
const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(`your total is ${total}`);
console.log(`your Average is ${avg}`);
console.log(fullName);


