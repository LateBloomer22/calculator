let operator = "";
let result = 0;
let currentInput = 0;
let previousInput = 0;
let inputString = "";

function getOperator(button) {
    operator = button.value;
}

function calculate(prev, operator, curr) {
    switch (operator) {
        case '+': return prev + curr; break;
        case '-': return prev - curr; break;
        case '*': return prev * curr; break;
        case '/': 
        if (curr == 0) {
            return "Division by 0 not allowed";
        } else {
            return prev / curr ;
        }
    }
}