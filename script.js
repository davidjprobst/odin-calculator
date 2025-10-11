const inputs = document.querySelectorAll(".input");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

let a = 0;
let b = 0;
let operator = "";
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

    // CREATE new array of numbers and operators
    for (let i = 0; i < displayArray.length; i++) {
        
        let prevoiousItem = displayArray[i-1];
        let currentItem = displayArray[i];
        let nextItem = displayArray[i+1];

        if (i == 0 && isOperator(currentItem)) {
            continue;
        } else if (i == 0 && !isOperator(currentItem)) {
            operableArray.push(currentItem);
        } else if (isOperator(prevoiousItem) && !isOperator(currentItem)) {
            operableArray.push(currentItem);
        } else if (isOperator(prevoiousItem) && isOperator(currentItem)) {
            continue;
        } else if (isOperator(currentItem) && nextItem === undefined) {
            continue;
        } else if (isOperator(currentItem && nextItem !== undefined)){
            operableArray.push(currentItem);
        } else if (isOperator(currentItem) && !isOperator(prevoiousItem)) {
            operableArray.push(currentItem);
        } else {
            operableArray[operableArray.length - 1] += currentItem;
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
    //  find multiplication symbols
        // get previous number
        // get following number
        // multiply previous * following

const operate = function(operableArray) {

    console.log(operableArray);

    // Multiply at first multiplication symbol, create new array, rerun
    let multiplierIndex = operableArray.indexOf(operableArray.find((item) => item == "*"));
    let dividerIndex = operableArray.indexOf(operableArray.find((item) => item == "/"));
    let additionIndex = operableArray.indexOf(operableArray.find((item) => item == "+"));
    let subtractionIndex = operableArray.indexOf(operableArray.find((item) => item == "-"));

    if (multiplierIndex != -1) {

        firstNumber = Number(operableArray[multiplierIndex - 1]);
        secondNumber = Number(operableArray[multiplierIndex + 1]);

        let product = multiply(firstNumber, secondNumber);
        operableArray.splice((multiplierIndex - 1), 3, product);
        console.log(operableArray);
        operate(operableArray);

    // Divide at first division symbol, create new array, rerun
    } else if (dividerIndex != -1) {

        firstNumber = Number(operableArray[dividerIndex - 1]);
        secondNumber = Number(operableArray[dividerIndex + 1]);

        if (secondNumber === 0) {
            display.innerText = "You can't divide by 0";
            return;
        }

        let quotient = divide(firstNumber, secondNumber);
        operableArray.splice((dividerIndex - 1), 3, quotient);
        console.log(operableArray);
        operate(operableArray);

    } else if (additionIndex != -1) {

        firstNumber = Number(operableArray[additionIndex - 1]);
        secondNumber = Number(operableArray[additionIndex + 1]);

        let sum = add(firstNumber, secondNumber);
        operableArray.splice((additionIndex - 1), 3, sum);
        console.log(operableArray);
        operate(operableArray);

    } else if (subtractionIndex != -1) {

        firstNumber = Number(operableArray[subtractionIndex - 1]);
        secondNumber = Number(operableArray[subtractionIndex + 1]);

        let difference = subtract(firstNumber, secondNumber);
        operableArray.splice((subtractionIndex - 1), 3, difference);
        console.log(operableArray);
        operate(operableArray);

    } else {
        displayValue = operableArray[0];
        display.innerText = displayValue;
        operableArray = [];
    }
}

inputs.forEach((input) => {
    input.addEventListener("click", () => {
        displayValue = display.innerText += input.innerText;
        console.log(displayValue);
    });
});

equals.addEventListener("click", () => {
    getOperableArray();
    operate(operableArray);
    operableArray = [];
});

clear.addEventListener("click", () => {
    displayValue = "";
    display.innerText = displayValue;
});