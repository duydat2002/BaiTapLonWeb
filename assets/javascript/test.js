window.onload = () => { 
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

    // function slider(sliderText, {navigation, pagination, loop = false, transitionText, timeAuto = 0, slidesPerView = 1, spaceBetween = 0, breakpoint}) {
    //     const sliderCotainer = document.querySelector(`${sliderText} .slider-container`);
    //     const sliderWrapper = sliderCotainer.querySelector(".slider-wrapper");
    //     const item = sliderCotainer.querySelector(".slider-wrapper");
    //     const sliderItems = sliderCotainer.querySelectorAll(".slider-item");
    //     const slideCount = item.childElementCount;
    //     const prev = document.querySelector(`${navigation} .slider-prev`);
    //     const next = document.querySelector(`${navigation} .slider-next`);
    //     const pagi = document.querySelector(pagination);
    //     const defaultSlidesPerView = slidesPerView;
    //     const defaultSpaceBetween = spaceBetween;
    //     var defaultPoint;
    //     if (breakpoint) {
    //         var check = false;
    //         for (var point in breakpoint) {
    //             if (window.innerWidth <= point) {
    //                 if (check) {
    //                     slidesPerView = breakpoint[point].slidesPerView;
    //                     spaceBetween = breakpoint[point].spaceBetween;
    //                 }
    //                 check = true;
    //             }
    //             defaultPoint = point;
    //         }
    //     }
    //     var isPause = false;
    //     var isSliderRun = false;
    //     var slideIndex = 1;
    //     var slideWidth = (sliderCotainer.offsetWidth-(slidesPerView-1)*spaceBetween)/slidesPerView;
    //     var transformWidth = slideWidth + spaceBetween;

    //     //Slider Wrapper
    //     sliderWrapper.style.width = sliderCotainer.offsetWidth*(slideCount/slidesPerView) + "px";

    //     //Slider Item
    //     for (let i=0; i<slideCount; i++) {
    //         sliderItems[i].dataset.index = i;
    //         sliderItems[i].style.width = slideWidth + "px";
    //         sliderItems[i].style.marginRight = spaceBetween + "px";
    //     }

    //     //Resize
    //     window.addEventListener("resize", () => {
    //         resetSlider();
    //     })

    //     //Clone child
    //     if (loop) {
    //         for (let i=0; i<slidesPerView; i++) {
    //             item.appendChild(sliderItems[i].cloneNode(true));
    //             item.prepend(sliderItems[slideCount-(i+1)].cloneNode(true));
    //         }
    //     }

    //     item.style.transform = `translateX(${-slidesPerView*transformWidth}px)`;

    //     //Navigation
    //     if (prev) {
    //         prev.onclick = () => {
    //             if (!isSliderRun) {
    //                 slideIndex--;
    //                 item.style.transition = transitionText;
    //                 item.style.transform = `translateX(${-slideIndex*transformWidth}px)`;
    //             }
    //         }
    //         next.onclick = () => {
    //             if (!isSliderRun) {
    //                 slideIndex++;
    //                 item.style.transition = transitionText;
    //                 item.style.transform = `translateX(${-slideIndex*transformWidth}px)`;
    //             }
    //         }
    //     }
        
    //     //Pagination
    //     if (pagi) {
    //         for (let i=0; i<slideCount; i++) {
    //             pagi.innerHTML += `<span class="slider-dot" data-dotindex="${i}"></span>`;
    //         }

    //         const dots = pagi.querySelectorAll(".slider-dot");
    //         dots.forEach((dot) => {
    //             dot.style.transition = transitionText;
    //             dot.onclick = () => {
    //                 slideIndex = 1 + parseInt(dot.dataset.dotindex);
    //                 item.style.transition = transitionText;
    //                 item.style.transform = `translateX(${-slideIndex*transformWidth}px)`;
    //             }
    //         })

    //         pagi.children[0].classList.add("active");

    //         item.addEventListener("transitionstart", () => {
    //             const dotActiveIndex = item.children[slideIndex]?.dataset["index"];
    //             pagi.querySelector(".slider-dot.active")?.classList.remove("active");
    //             pagi.children[dotActiveIndex]?.classList.add("active");
    //         })
    //     }

    //     //Auto
    //     if (timeAuto != 0) {
    //         setInterval(() => {
    //             if (!isPause) {
    //                 slideIndex++;
    //                 item.style.transition = transitionText;
    //                 item.style.transform = `translateX(${-slideIndex*transformWidth}px)`;
    //             }
    //         }, timeAuto)

    //         if (prev) {
    //             prev.onmousemove = function() {
    //                 isPause = true;
    //             }
    //             prev.onmouseleave = function() {
    //                 setTimeout(function() {
    //                     isPause = false;
    //                 }, 2000)
    //             }

    //             next.onmousemove = function() {
    //                 isPause = true;
    //             }
    //             next.onmouseleave = function() {
    //                 setTimeout(function() {
    //                     isPause = false;
    //                 }, 2000)
    //             }
    //         }
    //     }

    //     //Pause when hover
    //     sliderCotainer.onmousemove = function() {
    //         isPause = true;
    //     }
    //     sliderCotainer.onmouseleave = function() {
    //         setTimeout(function() {
    //             isPause = false;
    //         }, 2000)
    //     }

    //     //Loop
    //     item.addEventListener("transitionstart", () => {
    //         isSliderRun = true;
    //         // var activeIndex = slideIndex;
    //         // if (activeIndex >= slideCount + 1)
    //         //     activeIndex = 1;
    //         // if (activeIndex <= 0)
    //         //     activeIndex = slideCount;
    //     })
        
    //     item.addEventListener("transitionend", () => {
    //         isSliderRun = false;
    //         if (slideIndex >= slideCount + 1) {
    //             slideIndex = 1;
    //             item.style.transition = "none";
    //             item.style.transform = `translateX(${-slideIndex*transformWidth}px)`;
                
    //         } else if (slideIndex <= 0) {
    //             slideIndex = slideCount;
    //             item.style.transition = "none";
    //             item.style.transform = `translateX(${-slideIndex*transformWidth}px)`;
    //         }
    //     })

    //     //Breakpoint
    //     if (breakpoint) {
    //         window.onresize = () => {
    //             for (var point in breakpoint) {
    //                 if (window.innerWidth <= point) {
    //                     slidesPerView = breakpoint[point].slidesPerView;
    //                     spaceBetween = breakpoint[point].spaceBetween;
    //                     break;
    //                 }
    //             }
    //             if (window.innerHeight > defaultPoint) {
    //                 slidesPerView = defaultSlidesPerView;
    //                 spaceBetween = defaultSpaceBetween;
    //             }

    //             resetSlider();
    //         }
    //     }

    //     function resetSlider() {
    //         slideWidth = (sliderCotainer.offsetWidth-(slidesPerView-1)*spaceBetween)/slidesPerView;
    //         transformWidth = slideWidth + spaceBetween;
    //         sliderWrapper.style.transform = `translateX(${-slidesPerView*transformWidth}px)`;
    //         const sliderItemsAll = sliderCotainer.querySelectorAll(".slider-item");
    //         sliderItemsAll.forEach((item) => {
    //             item.style.width = slideWidth + "px";
    //             item.style.marginRight = spaceBetween + "px";
    //         });
    //     }
    // }

    function slider(sliderText, {navigation, pagination, loop = false, transitionText, timeAuto = 0, slidesPerView = 1, spaceBetween = 0, breakpoint}) {
        const sliderCotainer = document.querySelector(`${sliderText} .slider-container`);
        const sliderWrapper = sliderCotainer.querySelector(".slider-wrapper");
        const sliderItems = sliderCotainer.querySelectorAll(".slider-item");
        const slideCount = sliderWrapper.childElementCount;
        const prev = document.querySelector(`${navigation} .slider-prev`);
        const next = document.querySelector(`${navigation} .slider-next`);
        const pagi = document.querySelector(pagination);
        const defaultSlidesPerView = slidesPerView;
        const defaultSpaceBetween = spaceBetween;
        var defaultPoint;
        if (breakpoint) {
            var check = false;
            for (var point in breakpoint) {
                if (window.innerWidth <= point) {
                    if (check) {
                        slidesPerView = breakpoint[point].slidesPerView;
                        spaceBetween = breakpoint[point].spaceBetween;
                    }
                    check = true;
                }
                defaultPoint = point;
            }
        }
        var isPause = false;
        var isSliderRun = false;
        var slideIndex = 1;
        var slideWidth;
        var transformWidth;

        //Slider Item set index
        for (let i=0; i<slideCount; i++)
            sliderItems[i].dataset.index = i;
        
        //Clone child
        if (loop) {
            for (let i=0; i<slidesPerView; i++) {
                sliderWrapper.appendChild(sliderItems[i].cloneNode(true));
                sliderWrapper.prepend(sliderItems[slideCount-(i+1)].cloneNode(true));
            }
        }
        
        resetSlider();
        
        //Resize
        window.addEventListener("resize", () => {
            resetSlider();
        })

        //Navigation
        if (prev) {
            prev.onclick = () => {
                if (!isSliderRun) {
                    slideIndex--;
                    sliderWrapper.style.transition = transitionText;
                    sliderWrapper.style.transform = `translateX(${-slideIndex*transformWidth}px)`;
                }
            }
            next.onclick = () => {
                if (!isSliderRun) {
                    slideIndex++;
                    sliderWrapper.style.transition = transitionText;
                    sliderWrapper.style.transform = `translateX(${-slideIndex*transformWidth}px)`;
                }
            }
        }
        
        //Pagination
        if (pagi) {
            for (let i=0; i<Math.ceil(slideCount/slidesPerView); i++) {
                pagi.innerHTML += `<span class="slider-dot" data-dotindex="${i}"></span>`;
            }

            const dots = pagi.querySelectorAll(".slider-dot");
            dots.forEach((dot) => {
                dot.style.transition = transitionText;
                dot.onclick = () => {
                    slideIndex = 1 + parseInt(dot.dataset.dotindex);
                    sliderWrapper.style.transition = transitionText;
                    sliderWrapper.style.transform = `translateX(${-slideIndex*transformWidth}px)`;
                }
            })

            pagi.children[0].classList.add("active");

            sliderWrapper.addEventListener("transitionstart", () => {
                const dotActiveIndex = sliderWrapper.children[slideIndex]?.dataset["index"];
                pagi.querySelector(".slider-dot.active")?.classList.remove("active");
                pagi.children[dotActiveIndex]?.classList.add("active");
            })
        }

        //Auto
        if (timeAuto != 0) {
            setInterval(() => {
                if (!isPause) {
                    slideIndex++;
                    sliderWrapper.style.transition = transitionText;
                    sliderWrapper.style.transform = `translateX(${-slideIndex*transformWidth}px)`;
                }
            }, timeAuto)

            if (prev) {
                prev.onmousemove = function() {
                    isPause = true;
                }
                prev.onmouseleave = function() {
                    setTimeout(function() {
                        isPause = false;
                    }, 2000)
                }
            }
            if (next) {
                next.onmousemove = function() {
                    isPause = true;
                }
                next.onmouseleave = function() {
                    setTimeout(function() {
                        isPause = false;
                    }, 2000)
                }
            }
        }

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
        sliderWrapper.addEventListener("transitionstart", () => {
            isSliderRun = true;
            // var activeIndex = slideIndex;
            // if (activeIndex >= slideCount + 1)
            //     activeIndex = 1;
            // if (activeIndex <= 0)
            //     activeIndex = slideCount;
        })
        
        sliderWrapper.addEventListener("transitionend", () => {
            isSliderRun = false;
            if ((slideIndex >= slideCount + 1) || (slideIndex <= 0)) {
                if (slideIndex >= slideCount + 1)
                    slideIndex = 1;
                if (slideIndex <= 0)
                    slideIndex = slideCount;
                
                sliderWrapper.style.transition = "none";
                sliderWrapper.style.transform = `translateX(${-slideIndex*transformWidth}px)`;
            }
        })

        //Breakpoint
        if (breakpoint) {
            window.onresize = () => {
                for (var point in breakpoint) {
                    if (window.innerWidth <= point) {
                        slidesPerView = breakpoint[point].slidesPerView;
                        spaceBetween = breakpoint[point].spaceBetween;
                        break;
                    }
                }
                if (window.innerHeight > defaultPoint) {
                    slidesPerView = defaultSlidesPerView;
                    spaceBetween = defaultSpaceBetween;
                }

                resetSlider();
            }
        }

        function resetSlider() {
            slideWidth = (sliderCotainer.offsetWidth-(slidesPerView-1)*spaceBetween)/slidesPerView;
            transformWidth = slideWidth + spaceBetween;
            sliderWrapper.style.transform = `translateX(${-slidesPerView*transformWidth}px)`;
            const sliderItemsAll = sliderCotainer.querySelectorAll(".slider-item");
            sliderItemsAll.forEach((item) => {
                item.style.width = slideWidth + "px";
                item.style.marginRight = spaceBetween + "px";
            });
        }
    }

    slider(".home-banner__slider", {
        navigation: ".home-banner__slider",
        pagination: ".home-banner__slider .slider-pagination",
        loop: true,
        transitionText: "0.5s",
        timeAuto: 5000,
        slidesPerView: 1
    })

    slider(".categories__slider", {
        navigation: ".categories__navigation",
        pagination: ".categories__pagination",
        loop: true,
        transitionText: "0.5s",
        timeAuto: 5000,
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoint: {
            // <= 500
            500: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    })
}











