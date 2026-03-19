const historyList = document.getElementById("history-list");
const backBtn = document.getElementById("btn-back");
const clearBtn = document.getElementById("btn-clear-all");

// Redirect back to calculator
backBtn.onclick = () => {
    window.location.href = "index.html";
};

// Load and display history
function displayHistory() {
    const history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    
    if (history.length === 0) {
        historyList.innerHTML = '<p class="empty-msg">No history recorded yet.</p>';
        return;
    }

    historyList.innerHTML = history
        .map(entry => `<div class="history-item">${entry}</div>`)
        .join("");
}

// Clear storage
clearBtn.onclick = () => {
    if (confirm("Are you sure you want to delete all history?")) {
        localStorage.removeItem("calcHistory");
        displayHistory();
    }
};

// Initialize
displayHistory();
