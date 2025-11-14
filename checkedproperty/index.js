const checkbox = document.getElementById("checkbox")
const visa = document.getElementById("visa")
const mastercard = document.getElementById("mastercard")
const paypal = document.getElementById("paypal")
const messages = document.getElementById("messages")
const button = document.getElementById("button")
const messagep = document.getElementById("messagep")
button.onclick = function () {
    if(checkbox.checked){
       messages.textContent = "Thank you for subscribing :) " 
    }
    else{
        messages.textContent = "You are not subscribed :("
    }
    if(visa.checked){
       messagep.textContent = "You are paying through your Visa card" 
    }
    else if(paypal.checked){
        messagep.textContent = "You are paying through your Paypal"
    }
    else if(mastercard.checked){
        messagep.textContent = "You are paying through your mastercard"
    }
    else{
        messagep.textContent = "You have not selected the payment option : "
    }
}