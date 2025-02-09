import { AnnuityDue } from "./annuity.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#annuityForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            calculateAnnuity();
        });
    } else {
        console.error("Form not found! Check HTML structure.");
    }
});

// Dark Mode Toggle (Preserved)
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.createElement("button");
    darkModeToggle.id = "darkModeToggle";
    darkModeToggle.innerText = "🌙 Dark Mode";
    document.body.appendChild(darkModeToggle);

    // Check saved dark mode preference
    const isDarkModeEnabled = localStorage.getItem("dark-mode") === "enabled";
    if (isDarkModeEnabled) {
        document.body.classList.add("dark-mode");
        darkModeToggle.innerText = "☀️ Light Mode";
    }

    // Toggle Dark Mode on Click
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
        darkModeToggle.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
});

// Function to Calculate Annuity (Charts Removed)
function calculateAnnuity() {
    console.log("Calculate button clicked!"); // Debugging Log

    const pay = parseFloat(document.querySelector("#Payments").value);
    const number = parseFloat(document.querySelector("#Period").value);
    const time = parseFloat(document.querySelector("#Years").value);
    const interest = parseFloat(document.querySelector("#Rate").value);
    const presentValueDisplay = document.querySelector("#present");

    if (isNaN(pay) || isNaN(number) || isNaN(time) || isNaN(interest) || pay <= 0 || number <= 0 || time <= 0 || interest <= 0) {
        presentValueDisplay.innerHTML = "❌ Please enter valid positive numbers.";
        presentValueDisplay.classList.add("show");
        presentValueDisplay.style.color = "red";
        return;
    }

    try {
        const results = new AnnuityDue(pay, number, time, interest);
        presentValueDisplay.innerHTML = `✅ The present value is: <strong>£${results.present}</strong>`;
        presentValueDisplay.style.color = "black";

        // Apply animation
        presentValueDisplay.classList.add("show");
    } catch (error) {
        console.error("An error occurred while calculating annuity:", error);
        presentValueDisplay.innerHTML = "❌ Calculation failed. Check your input values.";
        presentValueDisplay.classList.add("show");
        presentValueDisplay.style.color = "red";
    }
}

// Attach Event Listener
form.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAnnuity();
});
