function show(shown, hidden) {
    document.getElementById(shown).style.display = "flex";
    document.getElementById(hidden).style.display = "none";
    // document.getElementById('progressBar').style.display = "initial";//shows the progress bar needs to be reset somewhere
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