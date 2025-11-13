let countnumber = document.getElementById("countnumber")
let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")
let reset = document.getElementById("reset")
let count = 0;
increase.onclick = function(){
    count++;
    countnumber = document.getElementById("countnumber").textContent = count;
}
decrease.onclick = function(){
    count--;
    countnumber = document.getElementById("countnumber").textContent = count;
}
reset.onclick = function(){
    count=0;
    countnumber = document.getElementById("countnumber").textContent = count;
}

