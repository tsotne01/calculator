"use strict";

const body = document.querySelector("body");

const radioBtns = document.querySelectorAll("input");

for (let i = 0; i < radioBtns.length; i++) {
  radioBtns[i].addEventListener("click", (e) => {
    console.log("removed class from body:");
    console.log(body.classList.value);
    body.classList.remove(body.classList.value);

    // console.log("set class to target id:");
    // console.log(e.target.id);
    body.classList.add(e.target.id);
  });
}

const buttons = document.querySelector(
  ".container__calculator-numbers-flex"
).childNodes;
const screen = document.querySelector(".container__calculator-screen");
screen.style.opacity = "0.7";

for (let j = 0; j < buttons.length - 1; j++) {
  buttons[j].addEventListener("click", (e) => {
    screen.style.opacity = "1";

    if (
      parseFloat(e.target.textContent) ||
      e.target.textContent == 0 ||
      e.target.textContent == "."
    ) {
      screen.textContent += e.target.textContent;
    } else if (e.target.textContent == "reset") {
      screen.textContent = "";
    } else if (e.target.textContent == "DEL") {
      let arr = screen.textContent.split("");
      if (arr.length != 0) {
        screen.textContent = "";
        console.log("splitted array : ", arr);
        arr.pop();
        console.log(arr.concat());
        arr = arr.concat();
        for (let i = 0; i < arr.length; i++) {
          screen.textContent += arr[i];
        }
      }
    }
  });
}
