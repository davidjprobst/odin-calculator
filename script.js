const inputs = document.querySelectorAll(".input");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

let a = 0;
let b = 0;
let operator = "";
let result = "";
let displayValue = display.innerText;

const checkOperator = function(value) {
    if (value == "+" || value == "-" || value == "*" || value == "/") {
        return true
    } else {
        return false
    }
};

inputs.forEach((input) => {
    input.addEventListener("click", () => {
        displayValue = display.innerText += input.innerText;
    });
});

equals.addEventListener("click", () => {
    function getNumbers() {
        // example: 45 + 5 * 6 - 4 / 2
            // multiply (5*6) -> 45 + 30 - 4 / 2
            // divide (4/2) -> 45 + 30 - 2
            // add (45 + 30) -> 75 - 2
            // subtract (75 - 2) -> 73
        
        // convert string to array
        let displayArray = Array.from(displayValue);

        // iterate through displayArray
        for (let i = 0; i < displayArray.length; i++) {
            //check if previous item is an operator
            let prevoiousItem = displayArray[i-1];
            let currentItem = displayArray[i];

            // IF previousItem is NOT an operator
            if (checkOperator(prevoiousItem) == true) {
                // store currentItem as new array value

            // IF currentItem IS an operator
            } else if (checkOperator(currentItem)){
                // store currentItem as new array value

            // IF currentItem is NOT an operator
            } else {
                // concat currentItem to previous value

            }
        };
            // if first item
                // store as new item in array 
                // move on to next item
            
        // if previous value is blank
        // else if operator, store as new item in array and move on
    }
    getNumbers();
});

clear.addEventListener("click", () => {
    displayValue = "";
    display.innerText = displayValue;
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

