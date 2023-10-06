document.addEventListener("DOMContentLoaded", function() {
let formValid = true;

const date = new Date();

//let currentMonth = date.getMonth() + 1; //add 1 to get the correct month because of 0 indexing
let currentYear = date.getFullYear();


const cardHolderNameInput = document.querySelector(".cardHolderName");
const cardNumberInput = document.querySelector(".cardNumber");
const monthInput = document.querySelector(".month");
const yearInput = document.querySelector(".year"); 
const expiryDate = document.querySelector(".expiry-date");
const cvcInput = document.querySelector(".cvc-field");
const nameError = document.querySelector(".name-error");
const cardNumberError = document.querySelector(".card-no-error");
const dateError = document.querySelector(".date-error");
const cvcError = document.querySelector(".cvc-error");
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

//Handler to allow only letters in the name input field
cardHolderNameInput.addEventListener("keydown", (e) => {
  if (!/[A-Za-z\s]/.test(e.key) && e.key !== "Backspace") {
    e.preventDefault();
  }
});

//Handler for cardNumber field
cardNumberInput.addEventListener("input", () => {
  let cardNumber = cardNumberInput.value;
  
  //add space after every 4 digits
  cardNumber = cardNumber.substring(0, 4) + " " + cardNumber.substring(4, 8) + " " + cardNumber.substring(8, 12) + " " + cardNumber.substring(12, 16);
  document.querySelector(".card-no").textContent = cardNumber;
});

//Allow only numbers in the card number input field
cardNumberInput.addEventListener("keydown", (e) => {
  if (!/\d/.test(e.key) && e.key !== "Backspace") {
    e.preventDefault();
  }
});

//Handler for expiry date field
monthInput.addEventListener("input", expiryDateInput);

yearInput.addEventListener("input", expiryDateInput);

//Allow only numbers in the month input field
monthInput.addEventListener("keydown", (e) => {
  if (isNaN(e.key) && e.key !== "Backspace") {
    e.preventDefault();
  }
});

//Allow only numbers in the year input field
yearInput.addEventListener("keydown", (e) => {
  if (isNaN(e.key) && e.key !== "Backspace") {
    e.preventDefault();
  }
});

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
//Allow only numbers in the cvc input field
cvcInput.addEventListener("keydown", (e) => {
  if (isNaN(e.key) && e.key !== "Backspace") {
    e.preventDefault();
  }
});



//Validate Form
//----------------------------

function checkName(cardHolderName) {
  //let specialXcters = /[`!@£#$%^&*(){}".,?;:|"\\<>«~+=-_]/;
  //Check for an empty name field
  if (cardHolderName === "") {
    console.log("Please enter a name");
    nameError.textContent = "Please enter a name"; 
    nameError.setAttribute("aria-hidden", false) ;
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

function checkCardNumber(cardNumber) {
  if (cardNumber === "") {
    console.log("Please enter your card number");
    cardNumberError.textContent = "Please enter your card number";
    cardNumberError.setAttribute("aria-hidden", true);
    cardNumberError.classList.add("error");
  } 
  //Check is card number is 16 characters long
  else if (cardNumber.length !== 16) {
    console.log("Card number must be a 16 digit number");
    cardNumberError.textContent = "Card number must be a 16 digit number";
    cardNumberError.setAttribute("aria-hidden", true);
    cardNumberError.classList.add("error");
  }
  else {
    cardNumberError.textContent = "Error";
    cardNumberError.setAttribute("aria-hidden", false);
    cardNumberError.classList.remove("error");
  }
}

function checkExpiryDate() {
  //Convert currentYear to string format then get the last two digits then convert it back to number using `parseInt` and store the value in a variable `currentYearLast2Digits`
  let currentYearLast2Digits = parseInt(String(currentYear).slice(-2)); 
  console.log(currentYearLast2Digits);

  if ((monthInput.value === "") || (yearInput.value  === "")) {
    console.log("Expiry date field cannot be empty");
    dateError.textContent = "Expiry date field cannot be empty";
    dateError.setAttribute("aria-hidden", true);
    dateError.classList.add("error");
  } 
  else if ((monthInput.value === 0) || (yearInput.value  == 0)) {
    console.log("Invalid date. Month and year cannot be 0");
    dateError.textContent = "Month and year cannot be 0";
    dateError.setAttribute("aria-hidden", true);
    dateError.classList.add("error");
  } 
  else if ((monthInput.value > 12) || (yearInput.value  > (currentYearLast2Digits + 4))) {
    console.log("Invalid date. Please enter a valid date.");
    dateError.textContent = "Please enter a valid date.";
    dateError.setAttribute("aria-hidden", true);
    dateError.classList.add("error");
  } 
  else if (yearInput.value  < currentYearLast2Digits) {
    console.log("Year cannot be before ${currentYear}");
    dateError.textContent = `Year cannot be before ${currentYear}`;
    dateError.setAttribute("aria-hidden", true);
    dateError.classList.add("error");
  }
  else {
    console.log("Valid date");
    dateError.textContent = "Error";
    dateError.setAttribute("aria-hidden", false);
    dateError.classList.remove("error");
  }
}

function checkCVCNo(cvc) {
  if (cvc === "") {
    console.log("CVC field cannot be empty");
    cvcError.textContent = "CVC field cannot be empty";
    cvcError.setAttribute("aria-hidden", true);
    cvcError.classList.add("error");
  } 
  else if (cvc.length !== 3) {
    console.log("Must be a 3 digit number");
    cvcError.textContent = "Must be a 3 digit number";
    cvcError.setAttribute("aria-hidden", true);
    cvcError.classList.add("error");
  } 
  else {
    cvcError.textContent = "Error";
    cvcError.setAttribute("aria-hidden", false);
    cvcError.classList.remove("error");
  }
}

function submitForm(e) {
  e.preventDefault();
  
  formValid = true;

  checkName(cardHolderNameInput.value);
  checkCardNumber(cardNumberInput.value);
  checkExpiryDate(expiryDate);
  checkCVCNo(cvcInput.value);

  if (formValid) {
    console.log("Valid");
  } else {
    console.log("Invalid");
  }
}

});