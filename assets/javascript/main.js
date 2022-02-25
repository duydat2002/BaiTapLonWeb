const cartBtn = document.querySelector(".cart__link");
const cartDropdown = document.querySelector(".cart__dropdown");

cartBtn.onclick = () => {
    cartDropdown.classList.toggle('active');
}


const headerBottom = document.querySelector(".header-bottom");

function scrollUp() {
    if (this.scrollY >= 160) 
        headerBottom.classList.add("active");
    else 
        headerBottom.classList.remove("active");
  }
  window.addEventListener("scroll", scrollUp);