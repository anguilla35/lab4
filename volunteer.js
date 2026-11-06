// Lab 4: Fix the Form!

console.log("Volunteer form JavaScript loaded.");

// Select the elements we need
const form = document.querySelector("#volunteerForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const interestSelect = document.querySelector("#interest");
const result = document.querySelector("#result");

// Listen for the form's submit event
form.addEventListener("submit", function (event) {
    // Stop the browser's normal form submission (page reload)
    event.preventDefault();

    // Read the values the user entered or selected
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const interestValue = interestSelect.value;

    // Check for missing or invalid information
    const errors = [];
    let firstInvalidField = null;

    if (nameValue === "") {
        errors.push("Please enter your full name.");
        firstInvalidField = firstInvalidField || nameInput;
    }

    if (emailValue === "") {
        errors.push("Please enter your email address.");
        firstInvalidField = firstInvalidField || emailInput;
    } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
        errors.push("Please enter a valid email address, such as name@example.com.");
        firstInvalidField = firstInvalidField || emailInput;
    }

    if (interestValue === "") {
        errors.push("Please Select an area of interest.");
        firstInvalidField = firstInvalidField || interestSelect;
    }

    // If anything is wrong, show the errors and stop
    if (errors.length > 0) {
        result.textContent = errors.join(" ");
        firstInvalidField.focus(); // move the user to the first field to fix
        return;
    }

    // Everything is valid: show a response based on the selected interest
    if (interestValue === "outreach") {
        result.textContent = "Thank you, " + nameValue + "! Our Community Outreach team will contact you at " + emailValue + " about sharing resources with neighbors.";
    } else if (interestValue === "events") {
        result.textContent = "Thank you, " + nameValue + "! Our Event Support team will contact you at " + emailValue + " about helping with upcoming community events.";
    } else if (interestValue === "mentoring") {
        result.textContent = "Thank you, " + nameValue + "! Our Youth Mentoring coordinator will contact you at " + emailValue + " about mentoring opportunities for local students.";
    } else {
        result.textContent = "Something went wrong. Please choose an area of interest and try again.";
    }
});
