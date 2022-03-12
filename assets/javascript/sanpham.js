// SortControl
function sortControl() {
    const sortContainer = document.querySelector(".sort-select");
    const sortTitle = document.querySelector(".sort__title");
    const sortValue = document.querySelector(".sort__value");
    const sortList = document.querySelector(".sort__list");
    const sortItems = document.querySelectorAll(".sort__list .sort-item");

    sortTitle.onclick = () => {
        sortList.classList.toggle("active");
    }

    window.onclick = (e) => {
        if (!sortContainer.contains(e.target)) {
            sortList.classList.remove("active");
        }
    }

    sortItems.forEach((item) => {
        item.onclick = () => {
            sortValue.innerHTML = item.innerHTML;
            sortList.classList.remove("active");
        }
    })
};
sortControl();

// Filter Control
function filterControl() {
    const filterNavOpen = document.querySelector(".search-filter__open");
    const filterNavClose = document.querySelector(".search-filter__close");
    const filterNav = document.querySelector(".search-filter");
    const overlay = document.querySelector("#overlay");
    const html = document.querySelector("html");

    filterNavOpen.onclick = () => {
        filterNav.classList.add("active");
        overlay.classList.add("active");
        html.classList.add("dis-scroll");
    }

    filterNavClose.onclick = () => {
        filterNav.classList.remove("active");
        overlay.classList.remove("active");
        html.classList.remove("dis-scroll");
    }
    overlay.onclick = () => {
        filterNav.classList.remove("active");
        overlay.classList.remove("active");
        html.classList.remove("dis-scroll");
    }
};
filterControl();