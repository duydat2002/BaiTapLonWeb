// Scroll Header 
function scrollHeader() {
    const headerTop = document.querySelector(".header-top");
    const headerBottom = document.querySelector(".header-bottom");
    const cartDropdown = document.querySelector(".cart__dropdown");
    const accountDropdown = document.querySelector(".account__dropdown");

    window.addEventListener("scroll", () => {
        if (window.innerWidth <= 991) {
            if (this.scrollY >= 85) {
                headerTop.classList.add("active");
                cartDropdown.classList.remove("active");
                accountDropdown.classList.remove("active");
            }
            else 
                headerTop.classList.remove("active");
        } else {
            if (this.scrollY >= 160) {
                headerBottom.classList.add("active");
                cartDropdown.classList.remove("active");
                accountDropdown.classList.remove("active");
            }
            else 
                headerBottom.classList.remove("active");
        }
    });
};
scrollHeader();

// Search Control
function searchControl() {
    const searchContainer = document.querySelector(".header__search");
    const searchBtn = document.querySelector(".search__btn");
    const searchBtnXSM = document.querySelector(".header__search__open");
    const searchInput = document.querySelector(".search__input");

    searchBtn.addEventListener("click", () => {
        if (576 <= window.innerWidth && window.innerWidth <= 991) {
            searchContainer.classList.toggle("active");
            if (searchInput.value == "")
                return false;
        }
    })

    searchBtnXSM.addEventListener("click", () => {
        searchContainer.classList.toggle("active");
    })
};
searchControl();

// Cart Control
function cartControl() {
    const cartBtn = document.querySelector(".cart__link");
    const cartDropdown = document.querySelector(".cart__dropdown");
    
    cartBtn.addEventListener("click", () => {
        cartDropdown.classList.toggle("active");
    })
    
    window.addEventListener("click", (e) => {
        const cart = document.querySelector(".header__cart");
        if (!cart.contains(e.target)) {
            cartDropdown.classList.remove("active");
        }
    })
};
cartControl();

// Account Header Control
function headerAccountControl() {
    const headerAccountBtn = document.querySelector(".account__link");
    const headerAccountDropdown = document.querySelector(".account__dropdown");
    
    headerAccountBtn.addEventListener("click", () => {
        headerAccountDropdown.classList.toggle("active");
    })
    
    window.addEventListener("click", (e) => {
        const headerAccount = document.querySelector(".header__account");
        if (!headerAccount.contains(e.target)) {
            headerAccountDropdown.classList.remove("active");
        }
    })
};
headerAccountControl();

// Navbar Control
function navbarControl() {
    const navbar = document.querySelector("#navbar");
    const navbarOpen = document.querySelector(".navbar__open");
    const navbarClose = document.querySelector(".navbar__close");
    const overlay = document.querySelector("#overlay");
    const html = document.querySelector("html");
    
    navbarOpen.addEventListener("click", () => {
        navbar.classList.add("active");
        overlay.classList.add("active");
        html.classList.add("dis-scroll");
    })
    
    if (navbarClose) {
        navbarClose.addEventListener("click", () => {
            navbar.classList.remove("active");
            overlay.classList.remove("active");
            html.classList.remove("dis-scroll");
        })
    }
    overlay.addEventListener("click", () => {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
        html.classList.remove("dis-scroll");
    })
    window.addEventListener("resize", () => {
        const windownWidth = window.innerWidth;

        if (windownWidth >= 992 && navbar.className.includes("active")) {
            navbar.classList.remove("active");
            overlay.classList.remove("active");
            html.classList.remove("dis-scroll");
        }
    })
};
navbarControl();

// Footer List Control
function footerListControl() {
    const footerDrop = document.querySelectorAll(".footer__content.has-drop");

    footerDrop.forEach((item) => {
        const footerTitle = item.querySelector(".footer__title");

        footerTitle.addEventListener("click", () => {
            const footerDropActive = document.querySelector(".footer__content.active");

            if (footerDropActive && footerDropActive != item)
                footerDropActive.classList.remove("active");
            item.classList.toggle("active");
        })
    })
};
footerListControl();

// Swiper Slider 
function swiperSlider() {
    const homeBannerSwiper = new Swiper('.home-banner__slider .swiper', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: ".home-banner__slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.home-banner__slider .swiper-next',
            prevEl: '.home-banner__slider .swiper-prev',
        },
    });

    const categoriesSwiper = new Swiper('.categories__slider .swiper', {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.categories__navigation .swiper-next',
            prevEl: '.categories__navigation .swiper-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }
    });

    const newProductSwiper = new Swiper('.newproduct__slider .swiper', {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.newproduct__container .swiper-next',
            prevEl: '.newproduct__container .swiper-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            },
        }
    });

    const specialProductSwiper = new Swiper('.specialproduct__slider .swiper', {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.specialproduct__container .swiper-next',
            prevEl: '.specialproduct__container .swiper-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            },
        }
    });

    const brandSwiper = new Swiper('.brand__slider .swiper', {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.brand__slider .swiper-next',
            prevEl: '.brand__slider .swiper-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 6
            },
        }
    });

    const quickviewSwiper = new Swiper('.quickview__slider .swiper', {
        speed: 500,
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
            nextEl: '.quickview__slider .swiper-next',
            prevEl: '.quickview__slider .swiper-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 10
            },
        }
    });
};
swiperSlider();

// Render Star
function star() {
    const stars = document.querySelectorAll(".product__rating i");
    stars.forEach(star => {
        if (star.className.indexOf("star-full") != -1)
            star.classList.add("fas","fa-star");
        else if (star.className.indexOf("star-half") != -1)
            star.classList.add("fas","fa-star-half-alt");
        else
            star.classList.add("far","fa-star");
    })
};
star();

// Modal Control
function modal() {
    const modal = document.querySelector("#modal");
    const wishlist = document.querySelector("#wishlist-modal");
    const quickview = document.querySelector("#quickview-modal");
    const blockcart = document.querySelector("#blockcart-modal");
    const html = document.querySelector("html");

    modal.addEventListener("click", (e) => {
        if (!wishlist.contains(e.target) && wishlist.className.includes("active")) {
            modal.classList.remove("active");
            wishlist.classList.remove("active");
            html.classList.remove("dis-scroll");
        }

        if (!quickview.contains(e.target) && quickview.className.includes("active")) {
            modal.classList.remove("active");
            quickview.classList.remove("active");
            html.classList.remove("dis-scroll");
        }

        if (!blockcart.contains(e.target) && blockcart.className.includes("active")) {
            modal.classList.remove("active");
            blockcart.classList.remove("active");
            html.classList.remove("dis-scroll");
        }
    })

    function wishlistControl() {
        const productWishlist = document.querySelectorAll(".product__wishlist");
        const wishlistClose = document.querySelector(".wishlist-modal .modal__close");
        
        productWishlist.forEach(item => {
            item.addEventListener("click", () => {
                modal.classList.add("active");
                wishlist.classList.add("active");
                html.classList.add("dis-scroll");
            })
        })
        
        wishlistClose.addEventListener("click", () =>  {
            modal.classList.remove("active");
            wishlist.classList.remove("active");
            html.classList.remove("dis-scroll");
        })
    };
    wishlistControl();

    function quickviewControl() {
        const productQuickviews = document.querySelectorAll(".product__quickview");
        const quickviewClose = document.querySelector(".quickview-modal .modal__close");
        
        productQuickviews.forEach(item => {
            item.addEventListener("click", () => {
                modal.classList.add("active");
                quickview.classList.add("active");
                html.classList.add("dis-scroll");
                quickviewAction();
            })
        })
        
        quickviewClose.addEventListener("click", () =>  {
            modal.classList.remove("active");
            quickview.classList.remove("active");
            html.classList.remove("dis-scroll");
        })
    
        function quickviewAction() {
            const sizes = document.querySelectorAll(".quickview__action .size-item");
            sizes.forEach(item => {
                item.addEventListener("click", () => {
                    const sizeActive = document.querySelector(".quickview__action .size-item.active");
        
                    sizeActive.classList.remove("active");
                    item.classList.add("active");
                })
            })
    
            const colors = document.querySelectorAll(".quickview__action .color-item");
            colors.forEach(item => {
                item.addEventListener("click", () => {
                    const colorActive = document.querySelector(".quickview__action .color-item.active");
        
                    colorActive.classList.remove("active");
                    item.classList.add("active");
                })
            })
    
            const quantityInput = document.querySelector(".quickview__quantity .quantity__input");
            quantityInput.value = 1;
            const quantityUp = document.querySelector(".quickview__quantity .quantity-up");
            const quantityDown = document.querySelector(".quickview__quantity .quantity-down");
            quantityUp.addEventListener("click", () => {
                const quantityNumber = parseInt(quantityInput.value);
                quantityInput.value = quantityNumber + 1;
            })
            quantityDown.addEventListener("click", () => {
                const quantityNumber = parseInt(quantityInput.value);
                quantityInput.value = quantityNumber == 1 ? 1 : quantityNumber - 1;
            })
    
            const quickviewImg = document.querySelector(".quickview__mainimg > img");
            const quickviewItems = document.querySelectorAll(".quickview-item");
            quickviewItems.forEach(item => {
                item.addEventListener("click", () => {
                    const quickviewActive = document.querySelector(".quickview-item.active");
                    const srcImg = item.querySelector("img").src;
                    
                    quickviewActive?.classList.remove("active");
                    item.classList.add("active");
                    quickviewImg.src = `${srcImg}`;
                })
            })
        }
    };
    quickviewControl();

    function blockcartControl() {
        const productBlockcart = document.querySelectorAll(".product__cart");
        const blockcartClose = document.querySelector(".blockcart-modal .modal__close");
        const blockcartContinue = document.querySelector(".blockcart-modal .blockcart__continueBtn");
        
        productBlockcart.forEach(item => {
            item.addEventListener("click", () => {
                modal.classList.add("active");
                blockcart.classList.add("active");
                html.classList.add("dis-scroll");
            })
        })
        
        blockcartClose.addEventListener("click", () =>  {
            modal.classList.remove("active");
            blockcart.classList.remove("active");
            html.classList.remove("dis-scroll");
        })
        blockcartContinue.addEventListener("click", () =>  {
            modal.classList.remove("active");
            blockcart.classList.remove("active");
            html.classList.remove("dis-scroll");
        })
    };
    blockcartControl();
};
modal();

// scrollUp
function scrollUp(){
    const scrollUp = document.querySelector("#scrollup");

    window.addEventListener("scroll", () => {
        if(this.scrollY >= 350) 
            scrollUp.classList.add("active"); 
        else 
            scrollUp.classList.remove("active")
    })
}
scrollUp();