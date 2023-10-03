const cardHolderNameInput = document.querySelector(".cardHolderName");
const cardNumberInput = document.querySelector(".cardNumber");
const monthInput = document.querySelector(".month");
const yearInput = document.querySelector(".year"); 
const expiryDate = document.querySelector(".expiry-date");
const cvcInput = document.querySelector(".cvc-field");
const nameError = document.querySelector("error");

//Event Handlers
//Handler for cardHolderName field
cardHolderNameInput.addEventListener("input", () => {
  const cardHolderName = cardHolderNameInput.value; 
  checkName();
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
function checkName() {
 if (cardHolderNameInput.value === "") {
  console.log("Please enter a name");
  /* nameError.innerHTML = "Please enter a name"; */
 }
}

function checkCardNumber() {
  if (cardNumberInput.value === "") {
    console.log("Please enter a number");
  }
}

function checkExpiryDate() {
  if (expiryDateInput.value === "") {

  }
}