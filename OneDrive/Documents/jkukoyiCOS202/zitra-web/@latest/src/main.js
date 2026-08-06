import './style.css'


const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", () => {window.location.href = "/login.html";});
}

const otpInputs = document.querySelectorAll("input[maxlength='1']");

otpInputs.forEach((input, index) => {

    input.addEventListener("input", () => {

        // Allow only numbers
        input.value = input.value.replace(/\D/g, "");

        // Move to next box
        if (input.value && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {

        // Move back when Backspace is pressed
        if (
            e.key === "Backspace" &&
            input.value === "" &&
            index > 0
        ) {
            otpInputs[index - 1].focus();
        }
    });

});
