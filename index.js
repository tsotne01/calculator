"use strict";

const body = document.querySelector("body");

const radioBtns = document.querySelectorAll("input");

// console.log(radioBtns);

// body.classList.add("theme-1"); //default theme

for (let i = 0; i < radioBtns.length; i++) {
  radioBtns[i].addEventListener("click", (e) => {
    console.log("removed class from body:");
    console.log(body.classList.value);
    body.classList.remove(body.classList.value);

    console.log("set class to target id:");
    console.log(e.target.id);
    body.classList.add(e.target.id);
    // if(e.target)
    // console.log();
  });
}

const buttons = document.querySelector(
  ".container__calculator-numbers-flex"
).childNodes;

console.log(buttons);

for (let j = 0; j < buttons.length - 1; j++) {
  buttons[j].addEventListener("click", (e) => {
    console.log(e.target.textContent);
  });
}
