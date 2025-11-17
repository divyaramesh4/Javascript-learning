function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*";
    let allowedchars = ""
    let password = ""


    allowedchars += includeLowercase ? lowercase : ""
    allowedchars += includeUppercase ? uppercase : ""
    allowedchars += includeNumbers ? numbers : ""
    allowedchars += includeSymbols ? symbols : ""
    // console.log(allowedchars)

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }
    return password;
}



const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
console.log(`Generated password: ${password}`)