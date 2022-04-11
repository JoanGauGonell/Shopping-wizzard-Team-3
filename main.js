
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
    document.querySelector(tag).reset();
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