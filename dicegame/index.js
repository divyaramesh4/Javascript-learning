function RollDice(){
    const num = parseInt(document.getElementById("numofDice").value);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for (let i = 0; i < num; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        values.push(roll);
        images.push(`<img src="dice_images/dice${roll}.png" alt="Dice ${roll}">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}