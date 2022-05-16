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


let characters = [];

for (let i=32; i<127; i++) {
    characters.push( String.fromCharCode(i) );
}

function generatePassword() { 
    return randomChar = { 
        first:`${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}`,
        second:`${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}`,
        third:`${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}`,
        fourth:`${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}${characters[Math.floor(Math.random() * 96)]}`
        

    }

}



firstBtn.textContent = generatePassword().first
secondBtn.textContent = generatePassword().second
thirdBtn.textContent = generatePassword().third
fourthBtn.textContent = generatePassword().fourth