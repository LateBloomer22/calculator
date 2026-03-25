let operator = "";
let result = 0;
let current = "";
let previous = "";
let previousInputTillNow = "";
let previousInputOutput = document.getElementById("previousInput");
let currentInputOutput = document.getElementById("currentInput"); 

function getOperator(button) {
    operator = button.value;
}

function previousInputDisplay() {
    previousInputOutput.textContent = previousInputTillNow;
}

function currentInputDisplay(){
    if (current != "") {
        currentInputOutput.textContent = current;
    }
    else {
        currentInputOutput.textContent = "0";
    }
    
} 


function del() {
    if (current.length != 0 ) {
        current = current.slice(0, -1);
    
    } else {
        return;
    }
};



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