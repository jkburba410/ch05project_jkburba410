// <p>This function checks how many required fields are empty.</p>
function checkMissing() {
    const requiredFields = document.querySelectorAll('.required');
    let missingCount = 0;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            missingCount++;
        }
    });

    const message = missingCount > 0 
        ? `You have ${missingCount} required field(s) missing.` 
        : "All required fields are filled.";

    document.getElementById('missing-count').textContent = message;

    return missingCount === 0;
}

// <p>This function checks if the email has at least 8 characters.</p>
function validateEmail() {
    const emailField = document.getElementById('email');
    const email = emailField.value.trim();

    if (email.length < 8) {
        emailField.classList.add('invalid-email');
        return false;
    } else {
        emailField.classList.remove('invalid-email');
        return true;
    }
}

// <p>This function runs both validation checks on form submit.</p>
function validateForm() {
    const noMissing = checkMissing();
    const emailValid = validateEmail();

    if (!noMissing || !emailValid) {
        alert("Form submission blocked. Please fill all required fields correctly.");
    } else {
        alert("Form submitted successfully!");
        // You can add form submission code here.
    }
}

document.getElementById('submitBtn').addEventListener('click', validateForm);
