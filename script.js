let a = 0;
let b = 0;
let operator = "";
let result = "";

const inputs = document.querySelectorAll(".input");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

inputs.forEach((input) => {
    input.addEventListener("click", () => {
        display.innerText += input.innerText;
    });
});

equals.addEventListener("click", () => {
    operate(2,4,"+");
});

clear.addEventListener("click", () => {
    display.innerText = "";
});

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(a, b, operator) {
    if (operator === "+") {
        result = add(a, b);
    } else if (operator === "-") {
        result = subtract(a, b);
    } else if (operator === "*") {
        result = multiply(a, b);
    } else if (operator === "/") {
        result = divide(a, b);
    } display.innerText = result;
}

