const profileInputs = document.querySelectorAll('#profile input');
const formProfile = document.getElementById('profile');

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
        console.log("CHECKED: ", document.querySelector('#finishConditions').checked);
        console.log("Disabled: ", document.getElementById('button-buy').getAttribute('disabled'));

        document.getElementById('button-buy').setAttribute("disabled", "enabled");
    }
}

const expressionsProfile = {
    username: /^[a-zA-Z0-9\_\-]{5,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/, // number, characters + @ + numbers, character + . + numbers,characters
    password: /^.{4,12}$/,
    confirmPassword: /^.{4,12}$/
}

const expressionsAddress = {
    firstName: /^[a-zA-Z]{4,16}$/,
    lastName: /^[a-zA-Z]{4,16}$/,
    birthday: /^[]{1,2}$/,
    Address_1: /^[a-zA-Z0-9]$/,
    Address_2: /^.{4,12}$/,
    Postal_code: /^.{4,12}$/,
    Country: /^.{4,12}$/,
    Phone: /^.{4,12}$/
}


// TIMER
const time = document.getElementById('time');
let countdown = setTimeout;
// TIMER

formProfile.addEventListener('submit', function (event) {
    e.preventDefault();
});

profileInputs.forEach(function formInputs(input) {
    input.addEventListener('keyup', validateForms);
    input.addEventListener('blur', validateForms);
});

function validateForms(event) {
    console.log(event.target.name);
    switch (event.target.name) {
        case "user":
            console.log("The username is:");
            if(expressionsProfile.username.test(event.target.value)){
                document.getElementById('group__user').classList.remove('form__group-incorrect');
                document.getElementById('group__user').classList.add('form__group-correct');
                document.querySelector('#group__user i').classList.remove('fa-circle-xmark');
                document.querySelector('#group__user i').classList.add('fa-check-circle');
                console.log("correct");
            }else{
                document.getElementById('group__user').classList.add('form__group-incorrect');
                console.log("incorrect");
            }
            break;
        case "email":
            if(expressionsProfile.email.test(event.target.value)){
                document.getElementById('group__email').classList.remove('form__group-incorrect');
                document.getElementById('group__email').classList.add('form__group-correct');
                document.querySelector('#group__email i').classList.remove('fa-circle-xmark');
                document.querySelector('#group__email i').classList.add('fa-check-circle');
                console.log("correct");
            }else{
                document.getElementById('group__email').classList.add('form__group-incorrect');
                console.log("incorrect");
            }
            break;
        case "password":
            if(expressionsProfile.password.test(event.target.value)){
                document.getElementById('group__password').classList.remove('form__group-incorrect');
                document.getElementById('group__password').classList.add('form__group-correct');
                document.querySelector('#group__password i').classList.remove('fa-circle-xmark');
                document.querySelector('#group__password i').classList.add('fa-check-circle');
                console.log("correct");
            }else{
                document.getElementById('group__email').classList.add('form__group-incorrect');
                console.log("incorrect");
            }
            break;
        case "password2":
            if(expressionsProfile.password.test(event.target.value)){
                document.getElementById('group__password2').classList.remove('form__group-incorrect');
                document.getElementById('group__password2').classList.add('form__group-correct');
                document.querySelector('#group__password2 i').classList.remove('fa-circle-xmark');
                document.querySelector('#group__password2 i').classList.add('fa-check-circle');
                console.log("correct");
            }else{
                document.getElementById('group__password2').classList.add('form__group-incorrect');
                console.log("incorrect");
            }
            break;
        case "default":
            break;
    }
}