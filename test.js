function dropdownActive() {
    const containers = document.querySelectorAll(`.select-box`);

    containers.forEach((container) => {
        const titleBox = container.querySelector(".select-box-title");
        const dropdown = container.querySelector(".select-box-list");
    
        titleBox.addEventListener("click", () => {
            dropdown.classList.toggle("active");
        })
    
        window.addEventListener("click", (e) => {
            if (!container.contains(e.target)) {
                dropdown.classList.remove("active");
            }
        })
    })
    
}
dropdownActive();

function renderListSelect() {
    const colors = ["Black", "White", "Sliver", "Gold", "Blue", "Green", "Red", "Brown", "Pink", "Purple"];
    const selectColor = document.querySelector(".select-color .select-box-list");

    colors.forEach((color) => {
        selectColor.innerHTML += `
            <div class="select-item">
                <input type="radio" name="color" value="${color}">
                <span class="color-box color-item color-${color.toLowerCase()}"></span>
                <span class="color-name">${color}</span>
            </div>
        `;
    })

    // document.querySelector(".select-color .select-box-list input[value='Black']").checked = true;

    const types = ["Men", "Women", "Sport", "Luxury", "New", "Special"];
    const selectType = document.querySelector(".select-type .select-box-list");

    types.forEach(type => {
        selectType.innerHTML += `
            <div class="select-item">
                <div class="checkbox-box">
                    <i class="fas fa-check checkbox-icon"></i>
                </div>
                <span class="type-name">${type}</span>
            </div>
        `;
    })

    const selectStars = document.querySelector(".select-stars .select-box-list");
    for (let i = 5; i >=0; i -= 0.5) {
        selectStars.innerHTML += `
            <div class="select-item">
                <input type="radio" name="stars" value="${i}">
                <span class="stars-text">${i}</span>
                <div class="stars-list">
                    ${renderStars(i)}
                </div>
            </div>
        `;
    }
}
renderListSelect();

function colorDropdown() {
    const container = document.querySelector(`.select-color`);
    const valueBox = container.querySelector(".select-box-value");
    const listCheckbox = container.querySelector(".select-box-list");
    const selectItem = listCheckbox.querySelectorAll(".select-item");
    
    selectItem.forEach (item => {
        item.onclick = () => {
            const color = item.querySelector(".color-name").innerHTML;
            valueBox.innerHTML = `
                <span class="color-box color-item color-${color.toLowerCase()}" data-value="${color}"></span>
                <span class="color-name">${color}</span>
            `;
            listCheckbox.classList.remove("active");
        }
    })
};
colorDropdown();

function starsDropdown() {
    const container = document.querySelector(`.select-stars`);
    const valueBox = container.querySelector(".select-box-value");
    const listCheckbox = container.querySelector(".select-box-list");
    const selectItem = listCheckbox.querySelectorAll(".select-item");
    
    valueBox.innerHTML = `
        <span class="stars-text">${5}</span>
        <div class="stars-list">
            ${renderStars(5)}
        </div>
    `;

    selectItem.forEach (item => {
        item.onclick = () => {
            const star = item.querySelector(".stars-text").innerHTML;
            valueBox.innerHTML = `
                <span class="stars-text">${star}</span>
                <div class="stars-list">
                    ${renderStars(star)}
                </div>
            `;
            listCheckbox.classList.remove("active");
        }
    })
};
starsDropdown();

function typeDropdown() {
    const container = document.querySelector(`.select-type`);
    const inputType = container.querySelector(".type-input");
    const selectItem = container.querySelectorAll(".select-item");
    var listType = [];

    selectItem.forEach(item => {
        item.onclick = () => {
            const checkbox = item.querySelector(".checkbox-box");
            const type = item.querySelector(".type-name").innerHTML;
            
            if (checkbox.className.includes("active")) {
                checkbox.classList.remove("active");
                listType.splice(listType.indexOf(type), 1);
            } else {
                checkbox.classList.add("active");
                listType.push(type);
            }

            inputType.value = listType.join(", ");
        }
    })

}
typeDropdown();

function renderStars(stars)
{
    var starsHTML = "";
    for (let i = 1; i <= 5; i++)
    {
        if (i <= stars)
            starsHTML += " <i class='fas fa-star'></i> ";
        else if (i - stars == 0.5)
            starsHTML += "<i class='fas fa-star-half-alt'></i> ";
        else
            starsHTML += "<i class='far fa-star'></i> ";
    }
    return starsHTML;
}