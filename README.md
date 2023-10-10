# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![Screenshot](./assets/images/screenshot.png)

### Links

- [Solution: ](https://your-solution-url.com)
- [Live Site: ](https://zippy-paprenjak-a96268.netlify.app)

## My process

### Built with

- JavaScript
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Bootstrap 5


### What I learned
* DOM manipulation
```js
  function checkName(cardHolderName) {
    //Check for an empty name field
    if (cardHolderName === "") {
      nameError.textContent = "Please enter a name";
      nameError.setAttribute("aria-hidden", false);
      nameError.classList.add("error");
      formValid = false;
    } else {
      //clear error if name is valid
      nameError.textContent = "Error";
      nameError.setAttribute("aria-hidden", true);
      nameError.classList.remove("error");
    }
  }
```

* How to use regular expressions (regex) to check for numbers in a string.

```js
  cardNumberInput.addEventListener("keydown", (e) => {
    if (!/\d/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  });
```

* How to use regex to allow only letters in an input field.
```js
  cardHolderNameInput.addEventListener("keydown", (e) => {
    if (!/[A-Za-z\s]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  });
```

### Useful resources

- [FreeCodeCamp](https://www.freecodecamp.org/news/regular-expressions-for-beginners/?source=post_page-----f7d05830f956--------------------------------) - This tutorial helped me understand how to use regular expressions (regex) to check for numbers in a string.

- [OneCompiler](https://onecompiler.com/questions/3xnp9df38/-javascript-how-to-check-for-special-characters-present-in-a-string#) - The answer by Meera in this thread helped me impliment regular expressions (regex) to check if special characters are present in a string.

- [Allow only numbers in input field](https://awik.io/allow-numbers-input-field-javascript/) - This article by Andreas Wik helped me to learn how to restrict an input field of type text to accept only numeric values.

- [CSS Reset](https://gist.github.com/Asjas/4b0736108d56197fce0ec9068145b421) - I used this to reset default browser styles.

## Author

- Website - [N. K. Siokwu](https://ladykays.github.io/my-react-portfolio/)
- Frontend Mentor - [@ladykays](https://www.frontendmentor.io/profile/ladykays)
- Linkedin - [N. K. Siokwu](https://www.linkedin.com/in/ndidiamaka-siokwu-67b1a6267/)


## Acknowledgments

I am immensely grateful to the creators of Frontend Mentor for providing me with this valuable opportunity. The challenges they offer have been instrumental in allowing me to apply and enhance the knowledge and skills I have acquired.

