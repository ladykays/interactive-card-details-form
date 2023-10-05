document.addEventListener("DOMContentLoaded", function() {
let formValid = true;

const cardHolderNameInput = document.querySelector(".cardHolderName");
const cardNumberInput = document.querySelector(".cardNumber");
const monthInput = document.querySelector(".month");
const yearInput = document.querySelector(".year"); 
const expiryDate = document.querySelector(".expiry-date");
const cvcInput = document.querySelector(".cvc-field");
const nameError = document.querySelector(".name-error");
const nameField = document.querySelector(".name-field");
//const form = document.querySelector("form");
const confirmBtn = document.querySelector(".confirm-btn");

//Event Handlers
//---------------------------

//Handler for confirm button
confirmBtn.addEventListener("click", submitForm);

//Handler for cardHolderName field
cardHolderNameInput.addEventListener("input", () => {
  const cardHolderName = cardHolderNameInput.value; 
  checkName(cardHolderName);
  document.querySelector(".name").textContent = cardHolderName;
});

//Handler for cardNumber field
cardNumberInput.addEventListener("input", () => {
  let cardNumber = cardNumberInput.value;
  //add space after every 4 digits
  cardNumber = cardNumber.substring(0, 4) + " " + cardNumber.substring(4, 8) + " " + cardNumber.substring(8, 12) + " " + cardNumber.substring(12, 16);
  document.querySelector(".card-no").textContent = cardNumber;
});

//Handler for expiry date field
monthInput.addEventListener("input", expiryDateInput);

yearInput.addEventListener("input", expiryDateInput);

function expiryDateInput() {
  const month = monthInput.value;
  const year = yearInput.value;
  expiryDate.textContent = month + "/" + year;
};

//Handler for CVC field
cvcInput.addEventListener("input", () => {
  const cvc = cvcInput.value;
  document.querySelector(".cvc").textContent = cvc;
});



//Validate Form
//----------------------------

function checkName(cardHolderName) {
  let specialXcter = /[`!@£#$%^&*(){}".,?;:|"\\<>«~+=-_]/;
  //Check for an empty name field
  if (cardHolderName === "") {
    console.log("Please enter a name");
    nameError.textContent = "Please enter a name"; 
    nameError.setAttribute("aria-hidden", false) ;
    nameError.classList.add("error");
    formValid = false;
  } 
  //Check for numbers(0-9) using the regular expression(regex) `/\d/` 
  else if (/\d/.test(cardHolderName)) {
    console.log("Name cannot contain numbers");
    nameError.textContent = "Name cannot contain numbers";
    nameError.setAttribute("aria-hidden", false);
    nameError.classList.add("error");
    formValid = false;
  }
  //Check for special characters
  else if(specialXcter.test(cardHolderName)){
    console.log("Name cannot contain special characters");
    nameError.textContent = "Name cannot contain special characters";
    nameError.setAttribute("aria-hidden", false);
    nameError.classList.add("error");
    formValid = false;
  }
  else {
    //clear error if name is valid
    nameError.textContent = "Error";
    nameError.setAttribute("aria-hidden", true);
    nameError.classList.remove("error");
  }   
}

function checkCardNumber() {
  if (cardNumberInput.value === "") {
    console.log("Please enter a number");
  }
}

function submitForm(e) {
  e.preventDefault();
  
  formValid = true;

  checkName(cardHolderNameInput.value);

  if (formValid) {
    console.log("Valid");
  } else {
    console.log("Invalid");
  }
}




function checkExpiryDate() {
  if (expiryDateInput.value === "") {

  }
}
});