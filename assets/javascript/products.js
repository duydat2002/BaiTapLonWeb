var products = [
    {
        id: 1,
        name: "Suunto Spartan Trainer Wrist HR",
        price: 214.44,
        discount: 20,
        alt: "suunto-spartan-trainer-wrist-hr-black-techwear",
        stars: 4.5
    },
    {
        id: 2,
        name: "Suunto 9 Baro & Peak",
        price: 530.34,
        discount: 10,
        alt: "suunto-9-peak-granite-blue-titanium",
        stars: 5
    },
    {
        id: 3,
        name: "Archetype Nemesis Automatic Gunmetal Gray",
        price: 364.00,
        discount: 5,
        alt: "archetype-nemesis-automatic",
        stars: 4
    },
    {
        id: 4,
        name: "Suunto Spartan Trainer Wrist HR",
        price: 18154.50,
        discount: 20,
        alt: "devon-tread-1E",
        stars: 4.5
    },
];

function renderProducts() {
    var abc = products.map((product) => {
        return `
        <div class="col-4 col-sm-6 col-xsm-12 pd-gap">
            <div class="product-item">
                <div class="product__thumb-container">
                    <a href="DetailProduct.html" class="product__img">
                        <img src="./assets/image/${product.alt}-1.png" alt="${product.alt}-1.png" class="img-main">
                        <img src="./assets/image/${product.alt}-2.png" alt="${product.alt}-2.png" class="img-secondary">
                    </a>
                    <div class="product__functions">
                        <div class="product__wishlist">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div class="product__quickview">
                            <i class="fas fa-eye"></i>
                        </div>
                        <div class="product__cart">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                </div>
                <div class="product__desc">
                    <div class="product__rating">
                        ${renderStars(product.stars)}
                    </div>
                    <a href="DetailProduct.html" class="product__name">${product.name}</a>
                    <div class="product__price-box">
                        <span class="product__price">€${parseFloat(product.price).toFixed(2)}</span>
                        <span class="product__price-sale">€${parseFloat(product.price*(100-product.discount)/100).toFixed(2)}</span> 
                    </div>
                </div>
                <div class="product__flags">
                    <span class="product__onsale">On sale!</span>
                    <span class="product__discount">-${product.discount}%</span>
                </div>
            </div>
        </div>
        `
    });
    
    const productList = document.querySelector(".products__list");
    productList.innerHTML = abc.join(" ");
    modal();
    
    const showmoreBtn = document.querySelector(".products__showmore");
    showmoreBtn.addEventListener("click", () => {
        productList.innerHTML += abc.join(" ");
        modal();
    })

    function renderStars(stars) {
        var starsHTML = "";
        for (let i=1; i<=5; i++) {
            if (i<=stars)
                starsHTML += `<i class="fas fa-star"></i> `;
            else if (i-stars == 0.5)
                starsHTML += `<i class="fas fa-star-half-alt"></i> `;
            else
                starsHTML += `<i class="far fa-star"></i> `;
        }
        return starsHTML;
    }
}
renderProducts();

const listQty = document.querySelector(".products__list-sort .list-qty");
const listQtyValue = document.querySelectorAll(".products__list .product-item").length;
listQty.innerHTML = listQtyValue;

// SortControl
function sortControl() {
    const sortContainer = document.querySelector(".sort-select");
    const sortTitle = document.querySelector(".sort__title");
    const sortValue = document.querySelector(".sort__value");
    const sortList = document.querySelector(".sort__list");
    const sortItems = document.querySelectorAll(".sort__list .sort-item");

    sortTitle.addEventListener("click", () => {
        sortList.classList.toggle("active");
    })

    window.addEventListener("click", (e) => {
        if (!sortContainer.contains(e.target)) {
            sortList.classList.remove("active");
        }
    })

    sortItems.forEach((item) => {
        item.addEventListener("click", () => {
            sortValue.innerHTML = item.innerHTML;
            sortList.classList.remove("active");
        })
    })
};
sortControl();

// Filter Control
function filterControl() {
    const filterNavOpen = document.querySelector(".search-filter__open");
    const filterNavClose = document.querySelector(".search-filter__close");
    const filterNav = document.querySelector(".search-filter");
    const filterClearBtn = document.querySelector(".search-filter-clearall");
    const overlay = document.querySelector("#overlay");
    const html = document.querySelector("html");
    var arrayFilterActive = [];

    filterNavOpen.addEventListener("click", () => {
        filterNav.classList.add("active");
        overlay.classList.add("active");
        html.classList.add("dis-scroll");

        renderCheckedFilter();
    })

    filterNavClose.addEventListener("click", () => {
        filterNav.classList.remove("active");
        overlay.classList.remove("active");
        html.classList.remove("dis-scroll");
    })
    overlay.addEventListener("click", () => {
        filterNav.classList.remove("active");
        overlay.classList.remove("active");
        html.classList.remove("dis-scroll");
    })
    window.addEventListener("resize", () => {
        const windownWidth = window.innerWidth;

        if (windownWidth >= 992 && filterNav.className.includes("active")) {
            filterNav.classList.remove("active");
            overlay.classList.remove("active");
            html.classList.remove("dis-scroll");
        }
    })

    function checkFilterItem() {
        const filterItems = document.querySelectorAll(".filter__item");

        filterItems.forEach((item) => {
            item.addEventListener("click", () => {
                item.classList.toggle("active");
            })
        })
    }
    checkFilterItem();

    // Add Filter 
    const activeFilterList = document.querySelector(".active-filter__list");
    const applyFilter = document.querySelector(".filter__price-btn");
    const priceFrom = document.querySelector(".filter__price-input input[name='priceFrom']");
    const priceTo = document.querySelector(".filter__price-input input[name='priceTo']");

    applyFilter.addEventListener("click", () => {
        const filtersActive = document.querySelectorAll(".filter__item.active");
       
        arrayFilterActive = [];

        if (priceFrom.value != "" || priceTo.value != "") {
            arrayFilterActive.push(`Price: € ${priceFrom.value} - € ${priceTo.value}`);
        }

        filtersActive.forEach((item) => {
            if (!arrayFilterActive.includes(item.dataset.value))
                arrayFilterActive.push(item.dataset.value);
        })

        renderActiveFilter();

        filterNav.classList.remove("active");
        overlay.classList.remove("active");
        html.classList.remove("dis-scroll");
    })

    // Remove Active Filter 
    function removeActiveFilter() {
        const activeFilters = activeFilterList.querySelectorAll(".filter-item");

        activeFilters.forEach((item) => {
            const filterName = item.querySelector(".filter-item__name").innerHTML;
            const removeFilterBtn = item.querySelector(".filter-item__close");

            removeFilterBtn.addEventListener("click", () => {
                arrayFilterActive.splice(arrayFilterActive.indexOf(filterName), 1);
                
                renderActiveFilter();
                renderCheckedFilter();
            })
        })
    }

    filterClearBtn.addEventListener("click", () => {
        arrayFilterActive = [];
        
        renderActiveFilter();
        renderCheckedFilter();
    })

    // Render Active Filter 
    function renderActiveFilter() {
        const htmls = arrayFilterActive.map((item) => {
            return `
                <div class="filter-item">
                    <span class="filter-item__name">${item}</span>
                    <i class="fas fa-times filter-item__close"></i>
                </div>   
            `;
        })
        activeFilterList.innerHTML = htmls.join(" ");

        if (arrayFilterActive.length > 0) 
            filterClearBtn.classList.add("active");
        else
            filterClearBtn.classList.remove("active");

        removeActiveFilter();
    }

    // Render Checked Filter
    function renderCheckedFilter() {
        const filterItems = document.querySelectorAll(".filter__item");
        filterItems.forEach((item) => {
            if (arrayFilterActive.includes(item.dataset.value))
                item.classList.add("active");
            else
                item.classList.remove("active");
        })

        const priceIndex = arrayFilterActive.findIndex(item => item.includes("Price"));
        if (priceIndex != -1) {
            const valuePrice = arrayFilterActive[priceIndex].split(" ");

            priceFrom.value = valuePrice[2];
            priceTo.value = valuePrice[5];
        } else {
            priceFrom.value = "";
            priceTo.value = "";
        }
    }
};
filterControl();