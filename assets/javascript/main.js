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
    const sliderItems = sliderCotainer.querySelectorAll(".slider-item");
    var isPause = false;
    var isSliderRun = false;
    var slideIndex = 1;

    var slideWidth = item.children[0].clientWidth;;
    const slideCount = item.childElementCount;
    
    //Numbered
    for (let i=0; i<slideCount; i++) {
        sliderItems[i].dataset.index = i;
    }

    //Resize
    window.addEventListener("resize", () => {
        slideWidth = sliderItems[0].clientWidth;
        item.style.transform = `translateX(${-slideWidth}px)`;
    })

    //Clone child
    item.appendChild(sliderItems[0].cloneNode(true));
    item.prepend(sliderItems[slideCount-1].cloneNode(true));
    
    item.firstElementChild.classList.add("slider-clone");
    item.lastElementChild.classList.add("slider-clone");

    item.style.transform = `translateX(${-slideWidth}px)`;
    item.children[slideIndex].classList.add("active");

    //Navigation
    if (sliderCotainer.querySelector(".slider-navigation")) {
        const prev = sliderCotainer.querySelector(".slider-prev");
        const next = sliderCotainer.querySelector(".slider-next");

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
    }
    
    //Pagination
    if (sliderCotainer.querySelector(".slider-pagination")) {
        const pagination = sliderCotainer.querySelector(".slider-pagination");

        for (let i=0; i<slideCount; i++) {
            pagination.innerHTML += `<span class="slider-dot" data-dotindex="${i}"></span>`;
        }

        const dots = pagination.querySelectorAll(".slider-dot");
        dots.forEach((dot) => {
            dot.onclick = () => {
                slideIndex = 1 + parseInt(dot.dataset.dotindex);
                item.style.transition = transitionText;
                item.style.transform = `translateX(${-slideIndex*slideWidth}px)`;
                console.log(slideIndex);
            }
        })

        pagination.children[0].classList.add("active");

        item.addEventListener("transitionstart", () => {
            const dotActiveIndex = item.children[slideIndex]?.dataset["index"];
            pagination.querySelector(".slider-dot.active").classList.remove("active");
            pagination.children[dotActiveIndex].classList.add("active");
        })
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
        item.querySelector(".active")?.classList.remove("active");
        var activeIndex = slideIndex;
        if (activeIndex >= slideCount + 1)
            activeIndex = 1;
        if (activeIndex <= 0)
            activeIndex = slideCount;
        item.children[activeIndex].classList.add("active");

    })
    
    item.addEventListener("transitionend", () => {
        isSliderRun = false;
        if (slideIndex >= slideCount + 1) {
            slideIndex = 1;
            item.style.transition = "none";
            item.style.transform = `translateX(${-slideIndex*slideWidth}px)`;
            
        } else if (slideIndex <= 0) {
            slideIndex = slideCount;
            item.style.transition = "none";
            item.style.transform = `translateX(${-slideIndex*slideWidth}px)`;
        }
    })
}

slider("home-banner__slider", "0.5s", 5000);


















