let result = document.getElementById("result");

let expression = "";

// Function to update display
function updateDisplay() {
    result.innerText = expression || "0";
}

// Number buttons (0–9)
for (let i = 0; i <= 9; i++) {
    document.getElementById("btn-" + i).onclick = function () {
        expression += i;
        updateDisplay();
    };
}

// Operators
document.getElementById("btn-pls").onclick = () => { expression += "+"; updateDisplay(); };
document.getElementById("btn-mns").onclick = () => { expression += "-"; updateDisplay(); };
document.getElementById("btn-mul").onclick = () => { expression += "*"; updateDisplay(); };
document.getElementById("btn-dvn").onclick = () => { expression += "/"; updateDisplay(); };
document.getElementById("btn-dsml").onclick = () => { expression += "."; updateDisplay(); };

// Equal button
document.getElementById("btn-eql").onclick = function () {
    try {
        expression = eval(expression).toString();
    } catch {
        expression = "Error";
    }
    updateDisplay();
};

// AC button (clear all)
document.getElementById("btn-ac").onclick = function () {
    expression = "";
    updateDisplay();
};

// Delete button (backspace)
document.getElementById("btn-del").onclick = function () {
    expression = expression.slice(0, -1);
    updateDisplay();
};