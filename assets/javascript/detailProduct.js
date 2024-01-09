function productpageSwiper() {
    const productpageSwiper = new Swiper('.productpage__slider .swiper', {
        speed: 500,
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.productpage__slider .swiper-next',
            prevEl: '.productpage__slider .swiper-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 10
            },
        }
    });
}
productpageSwiper();

function renderColor() {
    const colorBox = document.querySelector(".color-item");
    var color;

    switch (colorBox.dataset.value) {
        case "Black":
            color = "#1F2024";
            break;
        case "White":
            color = "#FFF";
            break;
        case "Sliver":
            color = "#9EA2A5";
            break;
        case "Gold":
            color = "#F2D022";
            break;
        case "Blue":
            color = "#0897CC";
            break;
        case "Green":
            color = "#63A404";
            break;
        case "Red":
            color = "#F20519";
            break;    
        case "Brown":
            color = "#A67B56";
            break;
        case "Pink":
            color = "#F2C9E0";
            break;
        case "Purple":
            color = "#C580F2";
            break;
    }

    colorBox.style.backgroundColor = color;
}
renderColor();

function productpageAction() {
    const quantityInput = document.querySelector(".productpage__quantity .quantity__input");
    quantityInput.value = 1;
    const quantityUp = document.querySelector(".productpage__quantity .quantity-up");
    const quantityDown = document.querySelector(".productpage__quantity .quantity-down");
    quantityUp.addEventListener("click", () => {
        const quantityNumber = parseInt(quantityInput.value);
        quantityInput.value = quantityNumber + 1;
    })
    quantityDown.addEventListener("click", () => {
        const quantityNumber = parseInt(quantityInput.value);
        quantityInput.value = quantityNumber == 1 ? 1 : quantityNumber - 1;
    })

    const productpageImg = document.querySelector(".productpage__mainimg > img");
    const productpageItems = document.querySelectorAll(".productpage-item");
    productpageItems.forEach(item => {
        item.addEventListener("click", () => {
            const productpageActive = document.querySelector(".productpage-item.active");
            const srcImg = item.querySelector("img").src;
            
            productpageActive?.classList.remove("active");
            item.classList.add("active");
            productpageImg.src = `${srcImg}`;
        })
    })
}
productpageAction();