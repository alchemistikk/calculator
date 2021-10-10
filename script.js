let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

function operate(operator, x, y) {
  switch (operator) {
      case "add":
          return add (x, y);
      case "subtract":
          return subtract (x, y);
      case "multiply":
          return multiply (x, y);
      case "divide":
          return divide (x, y); 
  }
}

let displayValue = '';
let firstOperand;
let operator;
let secondOperand;
let evaluated = false;

const displayNode = document.querySelector("#display");
const allNumbers = document.querySelectorAll(".operand");
const allOperators = document.querySelectorAll(".operator");
const equalsOperator = document.querySelector("#equals");
const clearOperator = document.querySelector("#clear");

allNumbers.forEach(number => {
  number.addEventListener('click', () => {
    if (evaluated === true) {
      displayValue = '';
      displayNode.textContent = '';
      displayValue += (number.textContent); 
      displayNode.textContent += (number.textContent);
      evaluated = false;
    } else {
      displayValue += (number.textContent); 
      displayNode.textContent += (number.textContent);
    }
  })
});

allOperators.forEach(operation => {
  operation.addEventListener('click', () => {
    firstOperand = Number(displayValue);
    operator = operation.id;
    displayValue = '';
    displayNode.textContent = '';
  })
});

equalsOperator.addEventListener('click', () => evaluate());
clearOperator.addEventListener('click', () => {
  clearValues();
  clearDisplay();
});

function evaluate () {
  secondOperand = Number(displayValue);
  displayValue = operate(operator, firstOperand, secondOperand);
  displayNode.textContent = operate(operator, firstOperand, secondOperand);
  evaluated = true;
  clearValues();
}

function clearValues () {
  firstOperand = undefined;
  operator = undefined;
  secondOperand = undefined;
  displayValue = '';
}

function clearDisplay () {
  displayNode.textContent = '';
}

// If equals pressed, then operand pressed, set display to operand