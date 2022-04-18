function show(shown, hidden) {
    document.getElementById(shown).style.display = "grid"; //flex or grid, that is the question
    document.getElementById(hidden).style.display = "none";
    document.querySelector('footer').style.display = "none";
    document.querySelector('.nav-header').style.display = "none";
    // document.getElementById('progressBar').style.display = "initial";//shows the progress bar needs to be reset somewhere
}

function hover(element) {
    document.querySelector('.focus-img img').setAttribute('src', element.getAttribute('src'));
}

const regularExpressionsProfile = {
    username: /^[a-zA-Z0-9\_\-]{5,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/, // number, characters + @ + numbers, character + . + numbers,characters
    password: /^.{4,12}$/,
    confirmPassword: /^.{4,12}$/
}

const regularExpressionsAddress = {
    firstName: /^[a-zA-Z0-9]{4,16}$/,
    lastName: /^[a-zA-Z0-9]{4,16}$/,
    birthday: /^[]{1,2}$/,
    Address_1: /^[a-zA-Z0-9]$/,
    Address_2: /^.{4,12}$/,
    Postal_code: /^.{4,12}$/,
    Country: /^.{4,12}$/,
    Phone: /^.{4,12}$/
}




// TIMER
const intervalTimer = document.querySelector(".sideright");
const minutesTime= document.querySelector(".time");
let timeMinutes = 0;

let showEveryMinute = setInterval (function timer() {
    intervalTimer.style.display="block";
    show5Seconds();
    timeMinutes++;
    minutesTime.textContent = timeMinutes+" ";
    if (timeMinutes===5){
        clearInterval(showEveryMinute);
    }
},6000);
function show5Seconds(){
    setTimeout(function(){
        intervalTimer.style.display="none";
    },5000)
}
// TIMER