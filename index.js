const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generatePasswordsBtn = document.getElementById("generate-passwords-btn");
let passwordOneEl = document.getElementById("password-one-el");
let passwordTwoEl = document.getElementById("password-two-el");

function getRandomIndex() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return randomIndex;
}

function generateRandomPasswordOne(passwordsLength) {
    passwordOneEl.textContent = ""
    for (let i = 0; i < passwordsLength; i++) {
        let randomIndex = getRandomIndex();
        passwordOneEl.textContent += characters[randomIndex];
    }
}

function generateRandomPasswordTwo(passwordsLength) {
    passwordTwoEl.textContent = ""
    for (let i = 0; i < passwordsLength; i++) {
        let randomIndex = getRandomIndex();
        passwordTwoEl.textContent += characters[randomIndex];
    }
}

generatePasswordsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    let passwordsLength = document.getElementById("passwords-length").value;
    
    if (passwordsLength) {
        generateRandomPasswordOne(passwordsLength);
        generateRandomPasswordTwo(passwordsLength);
    } else {
        generateRandomPasswordOne(15);
        generateRandomPasswordTwo(15);
    }
    
    passwordOneEl.style.cursor = "pointer";
    passwordTwoEl.style.cursor = "pointer";
});

passwordOneEl.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordOneEl.textContent);
    alert("Password copied");
});

passwordTwoEl.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordTwoEl.textContent);
    alert("Password copied");
});
