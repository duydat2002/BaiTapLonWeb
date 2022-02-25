const cartBtn = document.querySelector(".cart__link");
const cartDropdown = document.querySelector(".cart__dropdown");

cartBtn.onclick = () => {
    cartDropdown.classList.toggle("active");
}

function scrollUpMenu() {
    const headerBottom = document.querySelector(".header-bottom");
    if (this.scrollY >= 160) {
        headerBottom.classList.add("active");
        cartDropdown.classList.remove("active");
    }
    else 
        headerBottom.classList.remove("active");
}
window.addEventListener("scroll", scrollUpMenu);

window.onclick = (e) => {
    const cart = document.querySelector(".header__cart");
    if (!cart.contains(e.target)) {
        cartDropdown.classList.remove("active");
    }
}