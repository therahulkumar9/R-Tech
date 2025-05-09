const passwordBox = document.getElementById("password");

let passwordLength = 6;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const special = `\`~!@#$%^&*()_+-={}[]\\|:;\"'<>,.?/`;

let hasRunOnce = false

function createPassword(){

    let password = "";

    const lengthInput = document.getElementById("length");
     passwordLength = parseInt(lengthInput.value);
     if (isNaN(passwordLength) || passwordLength < 4) {
        passwordLength = 6; // fallback or default
    }

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += special[Math.floor(Math.random() * special.length)];


    let allCharacter = upperCase + lowerCase + number + special;
    // console.log(allCharacter);
    

    for(let i=4; i < passwordLength; i++){
        password += allCharacter[Math.floor(Math.random() * allCharacter.length)];
        // console.log(allCharacter);
        // console.log(password);
        
        

    }

    passwordBox.value = password;
    if (!hasRunOnce) {
        hasRunOnce = true;
        setTimeout(() => {
            createPassword();
        }, 1000);
    }
}


function copyPassword(){
    const password = passwordBox.value;
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
}


const button = document.getElementById("rotateBtn");
const image = document.getElementById("rotateImg");


button.addEventListener('click', () => {
    image.classList.add('rotated');
    setTimeout(() => {
        image.classList.remove('rotated');
    }, 500);
})