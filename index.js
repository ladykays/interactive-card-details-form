
document.addEventListener('DOMContentLoaded', function () {
const cardHolderNameInput = document.querySelector(".cardHolderName");
const cardNumberInput = document.querySelector(".cardNumber");
const monthInput = document.querySelector(".month");
const yearInput = document.querySelector(".year"); 
const expiryDate = document.querySelector(".expiry-date");
const cvcInput = document.querySelector(".cvc-field");


//Handler for cardHolderName field
cardHolderNameInput.addEventListener("input", () => {
  const cardHolderName = cardHolderNameInput.value; 
  document.querySelector(".name").textContent = cardHolderName;
});

//Handler for CVC field
cvcInput.addEventListener("input", () => {
  const cvc = cvcInput.value;
  document.querySelector(".cvc").textContent = cvc;
  console.log(cvc);
});

//Handler for cardNumber field
cardNumberInput.addEventListener("input", () => {
  const cardNumber =cardNumberInput.value;
  document.querySelector(".card-no").textContent = cardNumber;
  console.log(cardNumber);
});

//Handler for expiry date field
monthInput.addEventListener("input", expiryDateInput);

yearInput.addEventListener("input", expiryDateInput);

function expiryDateInput() {
  const month = monthInput.value;
  const year = yearInput.value;
  expiryDate.textContent = month + "/" + year;
};



});