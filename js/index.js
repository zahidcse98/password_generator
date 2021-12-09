let btn = document.getElementById('generate_btn');
let passwordRange = document.getElementById('passwordrange');
let passLength = document.getElementById('passlength');

let userLenght;
let upper_check = document.getElementById('uppercase_check');
let number_check = document.getElementById('number_check');
let character_check = document.getElementById('special-characters');
let password_show = document.getElementById('password');

passwordRange.onchange = function() {
    passlength.innerText = passwordRange.value;
    userLenght = passwordRange.value;
}



//array genertor
function arrayCreate (low, high) {
    const array = [];
    for(let i= low; i<=high; i++) {
        array.push(i);
    }
    return array;
}
//generate character codes array
let upperCaseArray = arrayCreate(65, 90);
let lowerCaseArray = arrayCreate(97, 122);
let numbersArray = arrayCreate(48, 57);
let specialArray = arrayCreate(33,47).concat(arrayCreate(58, 64)).concat(arrayCreate(91, 96)).concat(arrayCreate(123, 126));



let genPass = (userLenght, upperValue, numberValue, specialValue) => {
    // console.log(`Uppercase: ${upperValue}  Number:${numberValue} Special: ${specialValue}`);
    let codesArray = lowerCaseArray;
    if (upperValue) {
        codesArray = codesArray.concat(upperCaseArray);
    }
    if(numberValue){
        codesArray = codesArray.concat(numbersArray);
    }
    if(specialValue) {
        codesArray = codesArray.concat(specialArray);
    }
    console.log(codesArray);
    let passWord = [];
    for(let i=0; i<userLenght; i++){
        let charCode = codesArray[Math.floor(Math.random() * codesArray.length)];
        passWord.push(String.fromCharCode(charCode));
    }
    return passWord.join("");
}

btn.addEventListener('click',(e) =>{
    e.preventDefault();
    let charAmount = passwordRange.value;
    let includeUpperCase =  upper_check.checked;
    let includeNumber = number_check.checked;
    let includeSpecial = character_check.checked;
   // console.log(includeUpperCase);
    let password = genPass(charAmount, includeUpperCase, includeNumber, includeSpecial);
   // console.log(`Uppercase: ${includeUpperCase}  Number:${includeNumber} Special: ${includeSpecial}`);
    password_show.innerText = password;

} )