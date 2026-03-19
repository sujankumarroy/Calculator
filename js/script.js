let result = document.getElementById("result");

let expression = "";

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}

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

document.getElementById("btn-his").onclick = function () {
    window.location.href = "history.html";
};

// Operators
document.getElementById("btn-pls").onclick = () => { expression += "+"; updateDisplay(); };
document.getElementById("btn-mns").onclick = () => { expression += "-"; updateDisplay(); };
document.getElementById("btn-mul").onclick = () => { expression += "*"; updateDisplay(); };
document.getElementById("btn-dvn").onclick = () => { expression += "/"; updateDisplay(); };
document.getElementById("btn-dsml").onclick = () => { expression += "."; updateDisplay(); };

// Equal button
document.getElementById("btn-eql").onclick = function () {
    try {
        const expr = expression;
        expression = eval(expression).toString();
        const result = expression;
        saveToHistory(expr, result);
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

// Function to save calculation to Local Storage
function saveToHistory(expr, res) {
    if (res === "Error") return;

    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    const entry = `${expr} = ${res}`;

    history.unshift(entry);
    history = history.slice(0, 50);

    localStorage.setItem("calcHistory", JSON.stringify(history));
}
