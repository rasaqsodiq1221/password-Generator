let icon = document.getElementById('icon');

icon.addEventListener('click', toggleIcon);

function toggleIcon() {
    document.body.classList.toggle('darkTheme');
    if (document.body.classList.contains('darkTheme')) {
        icon.className = "fas fa-sun";
    }
    else {
        icon.className = "fas fa-moon"; 
    }
}

let firstBtn = document.getElementById('firstBtn');
let secondBtn = document.getElementById('secondBtn');
let thirdBtn = document.getElementById('thirdBtn');
let fourthBtn = document.getElementById('fourthBtn');
let passwordLength = document.getElementById('passwordLength');
let generatePasswordBtn = document.getElementById('generatePasswordBtn');


let characters = [];

for (let i=32; i<127; i++) {
    characters.push( String.fromCharCode(i) );
}


generatePasswordBtn.addEventListener('click', generateRandomPassword);

function generatePassword() {
    let unitLength = passwordLength.value;
    console.log(unitLength)
    let password = '';

    if (unitLength === '') {
        for (let i = 0; i < 11; i++) {
            password += characters[Math.floor(Math.random() * (characters.length + 1))]
        }
        return password
    } else {
        for (let i = 0; i < unitLength; i++) {
            password += characters[Math.floor(Math.random() * (characters.length + 1))]
        }
        return password
    }
    
}


function generateRandomPassword() {
    firstBtn.textContent = generatePassword()
    secondBtn.textContent = generatePassword()
    thirdBtn.textContent = generatePassword()
    fourthBtn.textContent = generatePassword()

}