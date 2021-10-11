let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;

let divide = (x, y) => {
  if (y === 0) {
    return 'You can\'t divide by zero';
  } else {
    return x / y;
  }
};

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
      displayValue = displayValue.toString();
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
    operator = operation.id;
    if (firstOperand !== '') {
      firstOperand = Number(displayValue);
    } else {
      evaluate();
    }
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
  displayNode.textContent = +operate(operator, firstOperand, secondOperand).
      toFixed(3);
  evaluated = true;
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