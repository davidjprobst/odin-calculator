const inputs = document.querySelectorAll(".input");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

let a = 0;
let b = 0;
let operator = "";
let result = "";
let displayValue = display.innerText;
let operableArray = [];

const isOperator = function(value) {
    if (value == "+" || value == "-" || value == "*" || value == "/") {
        return true
    } else {
        return false
    }
};

function getOperableArray() {
    
    let displayArray = Array.from(displayValue);

    // create new array of numbers and operators
    for (let i = 0; i < displayArray.length; i++) {
        
        let prevoiousItem = displayArray[i-1];
        let currentItem = displayArray[i];

        if (i == 0) {
            operableArray.push(currentItem);
        } else if (isOperator(prevoiousItem) == true) {
            operableArray.push(currentItem);
        } else if (isOperator(currentItem)){
            operableArray.push(currentItem);
        } else {
            operableArray[newArray.length - 1] += currentItem;
        }
    };
};

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

// example: 45 + 5 * 6 - 4 / 2
    // multiply (5*6) -> 45 + 30 - 4 / 2
    // divide (4/2) -> 45 + 30 - 2
    // add (45 + 30) -> 75 - 2
    // subtract (75 - 2) -> 73

// Operate in PEMDAS
// Iterate through operableArray
    //  find multiplication symbols
        // get previous number
        // get following number
        // multiply previous * following
        // create new array with result in place of (previous * following)

const operate = function(operableArray) {

    // multiply two numbers in array (first * symbol)
    let multiplierIndex = operableArray.indexOf(operableArray.find((item) => item == "*"));
    multiply(operableArray[multiplierIndex - 1], operableArray[multiplierIndex + 1]);

    // if (operator === "+") {
    //     result = add(a, b);
    // } else if (operator === "-") {
    //     result = subtract(a, b);
    // } else if (operator === "*") {
    //     result = multiply(a, b);
    // } else if (operator === "/") {
    //     result = divide(a, b);
    // } display.innerText = result;
}

inputs.forEach((input) => {
    input.addEventListener("click", () => {
        displayValue = display.innerText += input.innerText;
    });
});

equals.addEventListener("click", () => {
    getOperableArray();
    console.log(operableArray);
    operate(operableArray);
});

clear.addEventListener("click", () => {
    displayValue = "";
    display.innerText = displayValue;
});