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

let displayValue = 0;
let firstOperand;
let operator;
let secondOperand;

const displayNode = document.querySelector("#display");
const allNumbers = document.querySelectorAll(".operand");
const allOperators = document.querySelectorAll(".operator");
const equalsOperator = document.querySelector("#equals");

allNumbers.forEach(number => {
  number.addEventListener('click', () => {
    displayNode.textContent += (number.textContent);
    displayValue += (number.textContent); 
  })
})

allOperators.forEach(operation => {
  operation.addEventListener('click', () => {
    firstOperand = Number(displayValue);
    operator = operation.id;
    displayValue = 0;
    displayNode.textContent = null;
  })
})

equalsOperator.addEventListener('click', () => {
  secondOperand = Number(displayValue);
  displayNode.textContent = operate(operator, firstOperand, secondOperand);
  console.log(firstOperand);
  console.log(secondOperand);
  firstOperand = undefined;
  operator = undefined;
  secondOperand = undefined;
})

// If equals pressed, then operand pressed, set display to operand