let operator = "";
let result = 0;
let currentInput = "";
let previousInput = "";
let outputString = "";

function getOperator(button) {
    operator = button.value;
}


function del() {
    if (currentInput.length != 0 ) {
        currentInput = currentInput.slice(0, -1);
    } else {
        return;
    }
};


// function input(button){

// }

function calculate(prev, operator, curr) {
    prev = Number(prev);
    curr = Number(curr);
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