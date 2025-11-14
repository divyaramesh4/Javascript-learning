// let day = 6;
// let message;
// switch(day){
//     case 1:
//         message = "It is monday"
//         break;
//     case 2:
//         message = "It is Tuesday"
//         break;
//     case 3:
//         message = "It is Wednesday"
//         break;
//     case 4:
//         message = "It is Thursday"
//         break;
//     case 5:
//         message = "It is Friday"
//         break;
//     case 6:
//         message = "It is Saturday"
//         break;
//     case 7:
//         message = "It is Sunday"
//         break;
//     default:
//         message = `${day} is not a day`
// }
// console.log(message)

let score = 99;
let grade;
switch(true){
    case score>90:
        grade = "A";
        break;
    case score>60:
        grade = "B";
        break;
    case score>35:
        grade = "C";
        break;
    default :
    grade = "D"
}
console.log(grade)