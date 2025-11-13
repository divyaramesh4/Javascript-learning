let userName;
document.getElementById("button").onclick = function(){
    userName = document.getElementById("input").value;
    console.log(userName);
    document.getElementById("h1").textContent = `Hi ${userName}`
}