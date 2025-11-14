let input = document.getElementById("input");
let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.onclick = function() {
  let age = Number(input.value);

  if (age >= 100) {
    output.textContent = "You are too old boy!!!";
  } else if (age === 0) {
    output.textContent = "You are just born baby!!!";
  } else if (age < 18) {
    output.textContent = "You must be 18+ to enter this site";
  } else {
    output.textContent = "You can enter this site :)";
  }
};
