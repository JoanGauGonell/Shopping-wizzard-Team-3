const profileInputs = document.querySelectorAll("#profile input");
const formProfile = document.getElementById("profile");

const addressInputs = document.querySelectorAll('#address input, select');
const formAddress = document.getElementById('address');

const intervalTimer = document.querySelector(".sideright");
const minutesTime = document.querySelector(".time");
let timeMinutes = 0;

let phoneCountry = document.getElementById('countriesID');
document.getElementById('country').addEventListener("change", countrySelect);

// document.getElementById('resetProfile').addEventListener("click", resetForm);
// document.getElementById('resetAddress').addEventListener("click", resetForm);
// document.getElementById('button-buy').addEventListener('click', show());

function show(shown, hidden) {
    document.getElementById(shown).style.display = "grid";
    document.getElementById(hidden).style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("nav-header").style.display = "none";
}
// Images selector and array of images
function imagesContainer(smallImg) {
    let focusImg = document.querySelectorAll("#smallImg img");
    focusImg.forEach((e) => {
        switch (smallImg.id) {
            case "red":
                e.src = "/assets/roja_camiseta.jpeg";
                break;
            case "black":
                e.src = "assets/cami-negra2.jpg";
                break;
            case "rosa":
                e.src = "assets/rosa_camiseta.jpeg";
                break;
            case "white":
                e.src = "assets/blanco_basico_sin_diseno.jpeg";
                break;
            case "beige":
                e.src = "assets/beige_camiseta.jpeg";
                break;
            case "yellow":
                e.src = "assets/amarilla_camiseta.jpeg";
                break;
            default:
                break;
        }
    });
    selectProduct.colorShirt = smallImg.id;
    console.log(selectProduct.colorShirt);
}

function hover(element) {
    document
        .querySelector(".focus-img img")
        .setAttribute("src", element.getAttribute("src"));
    imagesContainer(element);
}
// End of the functions of the images
// add price



function resetForm(tag) {
    document.getElementById(tag).reset();
}

function enableBuy() {
    if (document.querySelector('#finishConditions').checked) {
        document.querySelector('#form__btn-checkout').disabled = false;
    } else if (!document.querySelector('#finishConditions').checked) {
        document.querySelector('#form__btn-checkout').disabled = true;
    }
}

// COUNTRY TO PHONE number allocation
function countrySelect(event) {
    switch (event.target.value) {
        case 'Andorra':
            phoneCountry.value = 'AND';
            break;
        case 'Espa??a':
            phoneCountry.value = 'ESP';
            break;
        case 'Francia':
            phoneCountry.value = 'FRA';
            break;
        case 'Alemania':
            phoneCountry.value = 'DEU';
            break;
        case 'Grecia':
            phoneCountry.value = 'GRC';
            break;
        default:
            break;
    }
}

const expressionsProfile = {
    username: /^[a-zA-Z0-9\_\-]{5,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+[a-zA-Z0-9_.+-@\.]{1,50}$/, // number, characters + @ + numbers, character + . + numbers,characters
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\_\$\#\???\.\-\+\*])[a-zA-Z0-9\_\$\#\???\.\-\+\*]{8,20}$/,
    // One number
    // One lowercase letter
    // One uppercase letter
    // One special character
    // Min. length: 8
    // Max. length: 20
    password2: /^.{8,20}$/
}

const expressionsAddress = {
    firstName: /^[a-zA-Z]{1,20}$/,
    lastName: /^[a-zA-Z]{1,20}$/,
    birthday: /^\d{4}\-\d{2}\-\d{2}$/,
    address1: /^[a-zA-Z0-9/\s\,\.\??\??/ ]{1,50}$/,
    address2: /^[a-zA-Z0-9/\s\,\.\??\??/ ]{0,50}$/,
    postalCode: /^[0-9]{1,5}$/,
    country: /^(?!----$).*/,
    phone: /^[1-9]{4,9}$/
}

// /^[0-9/-]{1,12}$/,
// ^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$

const formValues = {
    username: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    birthday: Date,
    address1: String,
    address2: String,
    postalCode: Number,
    country: Selection,
    phone: Number,
};

const selectProduct = {
  price: Number,
  colorShirt: String,
  size: String,
  };

function color_shirt(shirtColor){
    let focusColor = document.querySelectorAll("#shirtColor img");
    focusColor.forEach((e) =>{
        switch (shirtColor.target.id){

            case "black":
                selectProduct.colorShirt = "black";
                break;
            case "yellow":
                selectProduct.colorShirt = "yellow";
                break;
            case "beige":
                selectProduct.colorShirt = "beige";
                break;
            case "red":
                selectProduct.colorShirt = "red";
                break;
            case "white":
                selectProduct.colorShirt = "white";
                break;
            case "pink":
                selectProduct.colorShirt = "pink";
                break;
            case "default":
                break;
        }
    })
   
}
document.getElementById("button-buy").addEventListener("click", updateFinish);
function updateFinish (){
    let squareColor = document.getElementById("color-square");
    squareColor.style.backgroundColor = selectProduct.colorShirt;
}
// shirtColor = document.getElementsByClassName("shirt__color-img");

// TIMER ALERT EVERY MINUTE

//We use an event listener to start our timer when we begin to buy
document.getElementById("button-buy").addEventListener("click", timer);

//We define a function to show the timer every minute
function timer(){
let showEveryMinute = setInterval (function () {
       //if the buy button of the finish form is pressed we also clear the interval
       document.getElementById("form__btn-checkout").addEventListener("click", clearing);
       function clearing (){
       clearInterval(showEveryMinute);
       intervalTimer.style.display="none";
       }
    intervalTimer.style.display="block";
    show5Seconds();
    timeMinutes++;
    minutesTime.textContent = timeMinutes + " ";
    if (timeMinutes === 5) {
        clearInterval(showEveryMinute);
        document.location.reload();
        alert("Sorry! You exceded the Maximum time for buying this product");
       }

       }
       
,60000);};

//We define a function to make disappair the timer after 5 seconds of showing it.

function show5Seconds() {
    setTimeout(function () {
        intervalTimer.style.display = "none";
    }, 5000)
}

// TIMER ALERT EVERY MINUTE END


//FINISH TIMER

//We use an event listener to show the timer when we press the finish button
document.getElementById("button-buy").addEventListener("click", timeElapsed);
//We define the initial value of the timer
let minutesElement = 0;
let secondsElement = 0;
let minutsTaken = document.getElementById("minutesElapsed");
let secondsTaken = document.getElementById("secondsElapsed")

function timeElapsed() {

    let showEverySecond = setInterval(secondsElapsed, 1000);
    document.getElementById("form__btn-checkout").addEventListener("click", clear);
    //To stop counting seconds at the end we use a function to clear the interval
    function clear() {
        clearInterval(showEverySecond);
    }
}
//The function secondsElapsed is to increse 1 second every interval
function secondsElapsed() {
    secondsElement++;
    //The if is just to every 59 seconds increase 1 minute
    if (secondsElement > 59) {
        minutesElement++;
        secondsElement = 0;
    }
    //And now we just have to print our result in the HTML
    minutsTaken.textContent = minutesElement;
    secondsTaken.textContent = secondsElement;


}


//FINISH TIMER END


formProfile.addEventListener("submit", function (event) {
    e.preventDefault();
});

formAddress.addEventListener("submit", function (event) {
    e.preventDefault();
});

profileInputs.forEach(function formInputs(input) {
    input.addEventListener("keyup", validateForms);
    input.addEventListener("blur", validateForms);
});

addressInputs.forEach(function formInputs(input) {
    input.addEventListener('keyup', validateForms);
    input.addEventListener('blur', validateForms);
    input.addEventListener('change', validateForms);
});

function validateForms(event) {
    console.log(event);
    switch (event.target.name) {
        // PROFILE PAGE
        case "user":
            validateFields(expressionsProfile.username, event.target, 'user');
            break;
        case "email":
            validateFields(expressionsProfile.email, event.target, 'email');
            break;
        case "password":
            validateFields(expressionsProfile.password, event.target, 'password');
            validatePassword(event.target, 'password1', formValues.password);
            formValues.password = event.target.value;
            break;
        case "password2":
            validatePassword(event.target, 'password2', formValues.password);
            break;

            // ADDRESS PAGE
        case "firstName":
            validateFields(expressionsAddress.firstName, event.target, 'firstName');
            break;
        case "lastName":
            validateFields(expressionsAddress.lastName, event.target, 'lastName');
            break;
        case "birthday":
            validateFields(expressionsAddress.birthday, event.target, 'birthday');
            break;
        case "address1":
            validateFields(expressionsAddress.address1, event.target, 'address1');
            break;
        case "address2":
            validateFields(expressionsAddress.address2, event.target, 'address2');
            break;
        case "postalCode":
            validateFields(expressionsAddress.postalCode, event.target, 'postalCode');
            break;
        case "country":
            console.log(event.target);
            validateFields(expressionsAddress.country, event.target, 'country');
            break;
        case "phone":
            validateFields(expressionsAddress.phone, event.target, 'phone');
            break;
            // SHIPPING PAGE ?
        case "default":
            break;
    }
}

function correct(field) {
    document
        .getElementById(`group__${field}`)
        .classList.remove("form__group-incorrect");
    document
        .getElementById(`group__${field}`)
        .classList.add("form__group-correct");
    document
        .querySelector(`#group__${field} i`)
        .classList.remove("fa-circle-xmark");
    document.querySelector(`#group__${field} i`).classList.add("fa-check-circle");
    document
        .querySelector(`#group__${field} .form__input-error`)
        .classList.remove("form__input-error-active");
}

function incorrect(field) {
    document
        .getElementById(`group__${field}`)
        .classList.remove("form__group-correct");
    document
        .getElementById(`group__${field}`)
        .classList.add("form__group-incorrect");
    document.querySelector(`#group__${field} i`).classList.add("fa-circle-xmark");
    document
        .querySelector(`#group__${field} i`)
        .classList.remove("fa-check-circle");
    document
        .querySelector(`#group__${field} .form__input-error`)
        .classList.add("form__input-error-active");
}

function validatePassword(input, field, password1) {
    if (field == 'password1') {
        if (input.value != password1)
            incorrect('password2');
    } else
    if (input.value == password1) {
        correct(field);
    } else {
        incorrect(field);
    }
}

function validateFields(expression, input, field) {
    if (expression.test(input.value)) {
        correct(field);
    } else {
        incorrect(field);
    }
}