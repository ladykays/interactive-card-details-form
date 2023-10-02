const cardHolderNameInput = document.querySelector(".cardHolderName");
const cardNumberInput = document.querySelector(".cardNumber");

cardHolderNameInput.addEventListener("input", () => {
  const cardHolderName = cardHolderNameInput.value; document.querySelector(".name").textContent = cardHolderName;
});

cardNumberInput.addEventListener("input", () => {
  const cardNumber =cardNumberInput.value;
  document.querySelector(".card-no").textContent = cardNumber;
});

