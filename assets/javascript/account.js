// Show/ Hide Password
function showPassword() {
    const inputPass = document.querySelector(".form-control-password");
    const btnShowPass = document.querySelector(".form-password-btn");

    btnShowPass.addEventListener("click", () => {
        if (inputPass.type == "password") {
            inputPass.type = "text";
            btnShowPass.innerHTML = `<i class="fas fa-eye-slash"></i>`;
        } else {
            inputPass.type = "password";
            btnShowPass.innerHTML = `<i class="fas fa-eye"></i>`;
        }
    })
};
showPassword();

const a = document.querySelector(".form-control-password");