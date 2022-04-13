const profileInputs = document.querySelectorAll('#profile input');
const formProfile = document.getElementById('profile');

const addressInputs = document.querySelectorAll('#address input');
const formAddress = document.getElementById('address');

// document.getElementById('resetProfile').addEventListener("click", resetForm('#profile'));
// document.getElementById('resetAddress').addEventListener("click", resetForm('#address'));

function show(shown, hidden) {
    document.getElementById(shown).style.display = "grid";
    document.getElementById(hidden).style.display = "none";
    document.getElementById('footer').style.display = "none";
    document.getElementById('nav-header').style.display = "none";
}

function hover(element) {
    document.querySelector('.focus-img img').setAttribute('src', element.getAttribute('src'));
}

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

const expressionsProfile = {
    username: /^[a-zA-Z0-9\_\-]{5,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/, // number, characters + @ + numbers, character + . + numbers,characters
    password: /^.{4,12}$/,
    password2: /^.{4,12}$/
}

const expressionsAddress = {
    firstName: /^[a-zA-Z]{4,16}$/,
    lastName: /^[a-zA-Z]{4,16}$/,
    birthday: /^[]{1,2}$/,
    address1: /^[a-zA-Z0-9]$/,
    address2: /^.{4,12}$/,
    postalCode: /^.{4,12}$/,
    country: /^.{4,12}$/,
    phone: /^.{4,12}$/
}

// TIMER
const time = document.getElementById('time');
let countdown = setTimeout;
// TIMER

formProfile.addEventListener('submit', function (event) {
    e.preventDefault();
});

formAddress.addEventListener('submit', function (event) {
    e.preventDefault();
});

profileInputs.forEach(function formInputs(input) {
    input.addEventListener('keyup', validateForms);
    input.addEventListener('blur', validateForms);
});

addressInputs.forEach(function formInputs(input) {
    input.addEventListener('keyup', validateForms);
    input.addEventListener('blur', validateForms);
});

function validateForms(event) {
    console.log(event.target.name);
    switch (event.target.name) {
        // PROFILE PAGE
        case "user":
            console.log("The username is:");
            validateFields(expressionsProfile.username, event.target, 'user');
            break;
            case "email":
                validateFields(expressionsProfile.email, event.target, 'email');
                break;
            case "password":
                validateFields(expressionsProfile.password, event.target, 'password');
                break;
            case "password2":
                validateFields(expressionsProfile.password2, event.target, 'password2');
                break;
                // ADDRESS PAGE
            case "firstName":
                console.log("The address page firstName is:");
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

function validateFields(expression, input, field) {
    if (expression.test(input.value)) {
        document.getElementById(`group__${field}`).classList.remove('form__group-incorrect');
        document.getElementById(`group__${field}`).classList.add('form__group-correct');
        document.querySelector(`#group__${field} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#group__${field} i`).classList.add('fa-check-circle');
        document.querySelector(`#group__${field} .form__input-error`).classList.remove('form__input-error-active');
    } else {
        document.getElementById(`group__${field}`).classList.remove('form__group-correct');
        document.getElementById(`group__${field}`).classList.add('form__group-incorrect');
        document.querySelector(`#group__${field} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#group__${field} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group__${field} .form__input-error`).classList.add('form__input-error-active');
    }
}