let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;
let operate = (operator, x, y) => operator(x, y);

let displayValue = 0;
const displayNode = document.querySelector("#display");
const allNumbers = document.querySelectorAll(".operand");

allNumbers.forEach(number => {
  number.addEventListener('click', () => {
    displayNode.textContent = number.textContent;
    displayValue = number.textContent; 
  })
})