let operator = "";
let result = 0;
let current = "";
let previous = "";
let previousInputTillNow = "";
let previousInputOutput = document.getElementById("previousInput");
let currentInputOutput = document.getElementById("currentInput"); 

// Function to get the operator input by the user
function getOperator(button) {
    operator = button.value;
}

// Function to display the equation thus far
function previousInputDisplay() {
    previousInputOutput.textContent = previousInputTillNow;
}

// Function to display running input
function currentInputDisplay(){
    if (current != "") {
        currentInputOutput.textContent = current;
    }
    else {
        currentInputOutput.textContent = "0";
    }
    
} 


// Function to delete the last data entry
function del() {
    if (current.length != 0 ) {
        current = current.slice(0, -1);
    
    } else {
        return;
    }
};

// Function to calculate the output
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