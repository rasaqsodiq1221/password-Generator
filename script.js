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
let toolTipA = document.getElementsByClassName('tool');
let toolTipTextA = document.getElementById('toolTipTextA');

console.log(typeof toolTipA)





let characters = [];

for (let i=32; i<127; i++) {
    characters.push( String.fromCharCode(i) );
}


generatePasswordBtn.addEventListener('click', generateRandomPassword);

function generatePassword() {
    let unitLength = passwordLength.value;
    
    let password = '';

    if (unitLength === '') {
        for (let i = 0; i < 10; i++) {
            password += characters[Math.floor(Math.random() * (characters.length))]
        }
        return password
    } else if (unitLength === "0") {
        alert('put a value or generate 10 digits password automatically!')
    } else {
        for (let i = 0; i < unitLength; i++) {
            password += characters[Math.floor(Math.random() * (characters.length))]
        }
        return password
    }
    
}




function generateRandomPassword() {
    firstBtn.textContent = generatePassword()
    secondBtn.textContent = generatePassword()
    thirdBtn.textContent = generatePassword()
    fourthBtn.textContent = generatePassword()

    for (let i = 0; i < toolTipA.length; i++) {
        if (!toolTipA[i].classList.contains('toolTipA')) {

            toolTipA[i].classList.add('toolTipA');
            let span = document.createElement('span');
            span.className = 'toolTipTextA';
        
            let node = document.createTextNode('Copied!');
            span.appendChild(node);
        
        
            toolTipA[i].appendChild(span); 
        }
    }

    
    
}

/* function addToolTip() {
    toolTipA[i].classList.add('toolTipA');
    let span = document.createElement('span');
    span.className = 'toolTipTextA';

    let node = document.createTextNode('Copy to Clipboard');
    span.appendChild(node);


    toolTipA[i].appendChild(span);

// toolTipTextA.classList.toggle('toolTipTextA');
}
 */
function copyTextA() {
    navigator.clipboard.writeText(firstBtn.textContent)
}
function copyTextB() {
    navigator.clipboard.writeText(secondBtn.textContent)
}
function copyTextC() {
    navigator.clipboard.writeText(thirdBtn.textContent)
}
function copyTextD() {
    navigator.clipboard.writeText(fourthBtn.textContent)
}