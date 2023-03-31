const container = document.querySelector(".container");
const screenResults = document.querySelector(".screen-results");
const numbersOperators = document.querySelector(".numbers-operators");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const addSign = document.querySelector(".add");
const subtractSign = document.querySelector(".subtract");
const multiplySign = document.querySelector(".multiply");
const divideSign = document.querySelector(".divide");
const equalsSign = document.querySelector(".equal");
const clearSign = document.querySelector(".clear");
const backspaceSign = document.querySelector(".back-space");

// Create a function that will receive the number clicked and display it on the screen
function displayNumber() {
    let number = this.innerHTML;
    screenResults.innerHTML += number;
}

// Create a function that will receive the operator clicked and display it on the screen
function displayOperator() {
    let operator = this.innerHTML;
    screenResults.innerHTML += operator;
}

// Create a function that will clear the screen
function clearScreen() {
    screenResults.innerHTML = "";
}

// Create a function that receives any amount of numbers and an operator and returns the result
function calculate(operator, ...numbers) {
    if (operator === "+") {
        return numbers.reduce((acc, number) => acc + number);
    } else if (operator === "-") {
        return numbers.reduce((acc, number) => acc - number);
    } else if (operator === "*") {
        return numbers.reduce((acc, number) => acc * number);
    } else if (operator === "/") {
        return numbers.reduce((acc, number) => acc / number);
    }
}

// Add event listeners to all buttons
for (const button of document.querySelectorAll(".btn")) {
    if (button.classList.contains("add") || button.classList.contains("subtract") || button.classList.contains("multiply") || button.classList.contains("divide")) {
        button.addEventListener("click", displayOperator);
    } else if (button.classList.contains("equal")) {
        button.addEventListener("click", () => {
            let result = eval(screenResults.innerHTML);
            screenResults.innerHTML = result;
        });
    } else if (button.classList.contains("clear")) {
        button.addEventListener("click", clearScreen);
    } else {
        button.addEventListener("click", displayNumber);
    }
}

function deleteLastCharacter() {
    let screenContent = screenResults.innerHTML;
    screenResults.innerHTML = screenContent.substring(0, screenContent.length - 1);
  }

  backspaceSign.addEventListener("click", deleteLastCharacter);