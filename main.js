const profileInputs = document.querySelectorAll("#profile input");
const formProfile = document.getElementById("profile");

const addressInputs = document.querySelectorAll("#address input");
const formAddress = document.getElementById("address");

const intervalTimer = document.querySelector(".sideright");
const minutesTime = document.querySelector(".time");
let timeMinutes = 0;
let showEveryMinute = 0;

// document.getElementById('resetProfile').addEventListener("click", resetForm('#profile'));
// document.getElementById('resetAddress').addEventListener("click", resetForm('#address'));

// This doesn't work
// document.getElementById('button-buy').addEventListener('click', show());
// This doesn't work
// document.getElementById('nextBtn').addEventListener('click', show('form-address', 'form-profile'));

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
        e.src = "assets/cami-negra1.jpg";
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
  if (document.querySelector("#finishConditions").checked) {
    document.querySelector("#form__btn-checkout").disabled = false;
  } else if (!document.querySelector("#finishConditions").checked) {
    document.querySelector("#form__btn-checkout").disabled = true;
  }
}

const expressionsProfile = {
  username: /^[a-zA-Z0-9\_\-]{5,20}$/,
  email: /^[[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+]{5,20}$/, // number, characters + @ + numbers, character + . + numbers,characters
  password: /^.{4,12}$/,
  password2: /^.{4,12}$/,
};

const expressionsAddress = {
  firstName: /^[a-zA-Z]{0,20}$/,
  lastName: /^[a-zA-Z]{0,20}$/,
  birthday: /^[0-9/-]{1,12}$/,
  address1: /^[a-zA-Z0-9]{1,50}$/,
  address2: /^[a-zA-Z0-9]{1,50}$/,
  postalCode: /^[0-9]{1,5}$/,
  country: /^.{4,12}$/, //HOW TO VALIDATE A SELECT IN HTML
  phone: /^[1-9]{4,9}$/,
};
// Values of form and select items
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

// TIMER
// document.getElementById('button-buy').addEventListener("click", timer());

showEveryMinute = setInterval(timer(), 6000);

function timer() {
  console.log("timer:", showEveryMinute);
  intervalTimer.style.display = "block";
  show5Seconds();
  timeMinutes++;
  minutesTime.textContent = timeMinutes + " ";
  if (timeMinutes === 5) {
    clearInterval(showEveryMinute);
  }
}

function show5Seconds() {
  setTimeout(function () {
    intervalTimer.style.display = "none";
  }, 5000);
}
// TIMER END

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
  input.addEventListener("keyup", validateForms);
  input.addEventListener("blur", validateForms);
});

function validateForms(event) {
  console.log(event.target.name);
  switch (event.target.name) {
    // PROFILE PAGE
    case "user":
      validateFields(expressionsProfile.username, event.target, "user");
      break;
    case "email":
      validateFields(expressionsProfile.email, event.target, "email");
      break;
    case "password":
      validateFields(expressionsProfile.password, event.target, "password");
      formValues.password = event.target.value;
      break;
    case "password2":
      validatePassword(event.target, "password2", formValues.password);
      break;

    // ADDRESS PAGE
    case "firstName":
      console.log("The address page firstName is:");
      validateFields(expressionsAddress.firstName, event.target, "firstName");
      break;
    case "lastName":
      validateFields(expressionsAddress.lastName, event.target, "lastName");
      break;
    case "birthday":
      validateFields(expressionsAddress.birthday, event.target, "birthday");
      break;
    case "address1":
      validateFields(expressionsAddress.address1, event.target, "address1");
      break;
    case "address2":
      validateFields(expressionsAddress.address2, event.target, "address2");
      break;
    case "postalCode":
      validateFields(expressionsAddress.postalCode, event.target, "postalCode");
      break;
    case "country":
      validateFields(expressionsAddress.country, event.target, "country");
      break;
    case "phone":
      validateFields(expressionsAddress.phone, event.target, "phone");
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
