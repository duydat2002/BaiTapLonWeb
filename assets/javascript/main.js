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

function slider(sliderText, transitionText, timeAuto) {
    const sliderCotainer = document.querySelector(`.${sliderText} .slider-container`);
    const item = sliderCotainer.querySelector(".slider-wrapper");
    const prev = sliderCotainer.querySelector(".slider-prev");
    const next = sliderCotainer.querySelector(".slider-next");

    var isPause = false;
    var isSliderRun = false;
    var slideIndex = 1;

    var slideWidth = item.children[0].clientWidth;;
    const slideCount = item.childElementCount;
    
    //Resize
    window.addEventListener("resize", () => {
        slideWidth = item.children[0].clientWidth;
        item.style.transform = `translateX(${-slideWidth}px)`;
    })

    //Clone child
    const firstElement = item.firstElementChild;
    const lastElement = item.lastElementChild;
    item.appendChild(firstElement.cloneNode(true));
    item.prepend(lastElement.cloneNode(true));
    
    item.style.transform = `translateX(${-slideWidth}px)`;
    item.children[slideIndex].classList.add("active");

    //Control
    prev.onclick = () => {
        if (!isSliderRun) {
            slideIndex--;
            item.style.transition = transitionText;
            item.style.transform = `translateX(${-slideIndex*slideWidth}px)`;
        }
    }
    next.onclick = () => {
        if (!isSliderRun) {
            slideIndex++;
            item.style.transition = transitionText;
            item.style.transform = `translateX(${-slideIndex*slideWidth}px)`;
        }
    }

    //Auto
    setInterval(() => {
        if (!isPause) {
            slideIndex++;
            item.style.transition = transitionText;
            item.style.transform = `translateX(${-slideIndex*slideWidth}px)`;
        }
    }, timeAuto)

    //Pause when hover
    sliderCotainer.onmousemove = function() {
        isPause = true;
    }

    sliderCotainer.onmouseleave = function() {
        setTimeout(function() {
            isPause = false;
        }, 2000)
    }

    //Loop
    item.addEventListener("transitionstart", () => {
        isSliderRun = true;
        item.querySelector(".active").classList.remove("active");
    })
    
    item.addEventListener("transitionend", () => {
        isSliderRun = false;
        if (slideIndex == slideCount + 1) {
            slideIndex = 1;
            item.style.transition = "none";
            item.style.transform = `translateX(${-slideIndex*slideWidth}px)`;
            
        } else if (slideIndex == 0) {
            slideIndex = slideCount;
            item.style.transition = "none";
            item.style.transform = `translateX(${-slideIndex*slideWidth}px)`;
        }
        item.children[slideIndex].classList.add("active");
    })
}

slider("home-banner__slider", "0.5s", 5000);


var items = document.querySelector(".slider-wrapper");

















