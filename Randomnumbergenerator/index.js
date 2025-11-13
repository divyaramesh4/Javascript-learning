const Button = document.getElementById("myroll");
const myLabel = document.getElementById("label");
const min = 1;
const max = 6;
let randomNumber;

Button.onclick = function(){
    randomNumber = Math.floor(Math.random() * (max-min+1)) + min;
    myLabel.textContent = randomNumber;
}