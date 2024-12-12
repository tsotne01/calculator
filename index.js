"use strict";

const body = document.querySelector("body");

const radioBtns = document.querySelectorAll("input");

for (let i = 0; i < radioBtns.length; i++) {
  radioBtns[i].addEventListener("click", (e) => {
    body.classList.remove(body.classList.value);

    body.classList.add(e.target.id);
  });
}

const buttons = document.querySelector(
  ".container__calculator-numbers-flex"
).childNodes;
const screen = document.querySelector(".container__calculator-screen");
screen.style.opacity = "0.7";

document.getElementById("theme-1").checked = true; //default theme checked for visualisation purpose
let array = [];
let operations = [""];
let result = 0;

function calculate(arr, operation) {
  if (arr.length == 0) return arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (operation[i] == "+") {
      result = arr[i - 1] + arr[i];
      arr = arr.shift();
      i--;
      i > 0 ? (arr[i] = result) : result;
    }
    if (operation[i] == "*") {
      result = arr[i - 1] * arr[i];
      arr = arr.shift();
      i--;
      i > 0 ? (arr[i] = result) : result;
    }
    if (operation[i] == "/") {
      result = arr[i - 1] / arr[i];
      arr = arr.shift();
      i--;
      i > 0 ? (arr[i] = result) : result;
    }

    if (operation[i] == "-") {
      result = arr[i - 1] - arr[i];
      arr = arr.shift();
      i--;
      i > 0 ? (arr[i] = result) : result;
    }
  }

  return `${result}`;
}

function addNumberToScreen(e) {
  if (e.target.textContent == "." && screen.textContent == "") {
    addToScreen("0" + e.target.textContent);
  } else {
    addToScreen(e.target.textContent);
  }
}

function deleteLast() {
  let arr = screen.textContent.split("");
  if (arr.length > 0) {
    screen.textContent = "";
    arr.pop();
    arr = arr.concat();
    for (let i = 0; i < arr.length; i++) {
      screen.textContent += arr[i];
    }
  }
}
//adds text to screen
function addToScreen(text) {
  screen.textContent += text;
}

//clears screen
function clearScreen() {
  screen.textContent = "";
}

//button clicking handler
function btnClick(e) {
  screen.style.opacity = "1";
  if (
    parseFloat(e.target.textContent) ||
    e.target.textContent == 0 ||
    e.target.textContent == "."
  ) {
    addNumberToScreen(e);
  } else if (e.target.textContent == "reset") {
    clearScreen();
  } else if (e.target.textContent == "DEL") {
    deleteLast();
  }
  if (e.target.textContent == "=") {
    array.push(parseFloat(screen.textContent));

    clearScreen();
    addToScreen(calculate(array, operations));
    array = [];
    operations = [""];
    result = 0;
  } else if (e.target.textContent == "+") {
    if (screen.textContent != "") {
      array.push(parseFloat(screen.textContent));
    }
    if (operations.length > array.length && operations[0] == "")
      operations.splice(-1, 1);
    operations.push("+");

    clearScreen();
  } else if (e.target.textContent == "/") {
    if (screen.textContent != "") {
      array.push(parseFloat(screen.textContent));
    }
    if (operations.length > array.length && operations[0] == "")
      operations.splice(-1, 1);
    operations.push("/");
    clearScreen();
  } else if (e.target.textContent == "*") {
    if (screen.textContent != "") {
      array.push(parseFloat(screen.textContent));
    }
    if (operations.length > array.length && operations[0] == "")
      operations.splice(-1, 1);
    operations.push("*");
    clearScreen();
  } else if (e.target.textContent == "-") {
    if (screen.textContent != "") {
      array.push(parseFloat(screen.textContent));
    }
    if (operations.length > array.length && operations[0] == "")
      operations.splice(-1, 1);
    operations.push("-");
    clearScreen();
  }
}

for (let j = 0; j < buttons.length - 1; j++) {
  buttons[j].addEventListener("click", btnClick);
}
