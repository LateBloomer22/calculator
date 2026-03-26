let operator = "";
let current = "";
let previous = "";
let previousInputTillNow = "";
let previousInputOutput = document.getElementById("previousInput");
let currentInputOutput = document.getElementById("currentInput"); 
let isResult = false;

// Function to show 0 in display on pageload
window.onload = currentInputDisplay();

// Function to get the operator input by the user
function getOperator(button) {
    if (current == "" && previous == "") {
        return;
    } 
    else if (previous == "" && current != ""){
        operator = button.value;
        previous = current;
        current = "";
        previousInputTillNow = `${previous} ${operator}`;
        previousInputDisplay();
        currentInputDisplay();
    } 
    else if (previous != "" && current != "") {
        previous = String(calculate(previous, operator, current));
        current = "";
        operator = button.value;
        previousInputTillNow = `${previous} ${operator}`;
        previousInputDisplay();
        currentInputDisplay();
    } 
    else if (previous != "" && current == "") {
        operator = button.value;
        previousInputTillNow = `${previous} ${operator}`;
        previousInputDisplay();
    }   
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

// Function to create the input number
function input(button) {
    current += button.textContent;
    currentInputDisplay();
}

// Function to operate delete button 
function del() {
    if (isResult == false) {
        lastDel();
    } else {
        previousInputTillNow = "";
        previousInputDisplay();
        previous = "";
        lastDel();
        isResult = false;
    }
};

// Function to delete the last data entry
function lastDel () {
    if (current.length != 0 ) {
        current = current.slice(0, -1);
        currentInputDisplay();
    } else {
        return;
    }
}

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

// function to produce result
function calculationOutput (){
    previousInputTillNow = `${previous} ${operator} ${current} = `;
    previousInputDisplay();
    current = String(calculate(previous,operator,current));
    currentInputOutput.textContent = current;
    isResult = true;
    previous = "";
}

// Function to reset everything
function reset() {
    operator = "";
    current = "";
    previous = "";
    previousInputTillNow = "";
    previousInputDisplay();
    currentInputDisplay();
}

// Function to deal with 0
// function zero() {
//     if (isResult == false){
//         if (current == "" && previous == "") {
//         return;
//     } else if (current == "" && previous != "" ){
//         current += "0";
//         currentInputDisplay();
//         }
//         else if (current == "0"){
//             return;
//         } else {
//             current += "0";
//             currentInputDisplay();
//         }
//     } 
//     else  {
//         previousInputTillNow = "";
//         previousInputDisplay();
//         if (current == "0") {
//             return;
//         } else {
//             current += "0";
//             currentInputDisplay();
//         }
//         isResult = false;
//     }
// }