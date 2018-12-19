var nextBtn = document.querySelector('.banner-next');
var prevBtn = document.querySelector('.banner-prev');
var images = document.querySelectorAll('.banner-slide');
var currentIndex = 0;
console.log(images);

images[currentIndex].classList.add('banner-slide-show');


function changeNextPicture (event) {
    event.preventDefault();

    images[currentIndex].classList.remove('banner-slide-show');

    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    images[currentIndex].classList.add('banner-slide-show');
};

function changePrevPicture (event) {
    event.preventDefault();

    images[currentIndex].classList.remove('banner-slide-show');

    if (currentIndex === 0) {
        currentIndex = images.length - 1;

    } else {
        currentIndex--;
    }

    images[currentIndex].classList.add('banner-slide-show');
};

images[currentIndex].classList.add('banner-slide-show');
nextBtn.addEventListener('click', changeNextPicture);
prevBtn.addEventListener('click', changePrevPicture);

/*ZNIKAJĄCY ELEMENT*/

var img1 = document.querySelector('.photo1');
var img2 = document.querySelector('.photo2');

img1.addEventListener('mouseover', function() {
    img1.firstElementChild.classList.add('hide');
});
img2.addEventListener('mouseover', function() {
    img2.firstElementChild.classList.add('hide');
});

img1.addEventListener('mouseout', function() {
    img1.firstElementChild.classList.remove('hide');
});
img2.addEventListener('mouseout', function() {
    img2.firstElementChild.classList.remove('hide');
});



/*KALKULATOR*/

const listArrows = document.querySelectorAll(".list_arrow");
const options = document.querySelectorAll(".form_calc li");

const chairType = document.querySelector(".title");
const chairColor = document.querySelector(".color");
const chairMaterial = document.querySelector(".pattern");
const checkbox = document.querySelector(".checkbox");

const chairTypePrice = document.querySelector(".title.value");
const chairColorPrice = document.querySelector(".color.value");
const chairMaterialPrice = document.querySelector(".pattern.value");
const chairTransportPrice = document.querySelector(".transport.value");

const totalField = document.querySelector(".sum strong");

const greenButton = document.querySelector(".green_button");
const warning = document.querySelector(".warning");

const image = document.querySelector(".image_part img");



const priceList = {
    Clair: 300,
    Margarita: 600,
    Selena: 500,
    Red: 50,
    Orange: 100,
    Black: 100,
    Leather: 250,
    Fabric: 0,
    Transport: 100,
    Notransport: 0
}

checkbox.querySelector("input").checked = false;

for (arrow of listArrows) {
    arrow.addEventListener("click", function () {
        this.parentElement.querySelector(".list_panel").classList.toggle("visible");
        warning.classList.remove("visible");
    });
}

for (option of options) {
    option.addEventListener("click", function () {
        if (this.dataset.option === "type") {
            chairType.textContent = `Chair ${this.textContent}`;
        } else if (this.dataset.option === "color") {
            chairColor.textContent = this.textContent;
        } else if (this.dataset.option === "material") {
            chairMaterial.textContent = this.textContent;
        }
        this.parentElement.classList.remove("visible");
        this.parentElement.parentElement.querySelector(".list_label").textContent = this.textContent;
        this.parentElement.parentElement.querySelector(".list_label").style.color = "#585858";

        totalField.textContent = updatePrice();
    });
}

checkbox.addEventListener("click", function () {
    if (this.querySelector("input").checked) {
        document.querySelector(".transport").textContent = "Transport";
    } else {
        document.querySelector(".transport").textContent = "";
    }
    totalField.textContent = updatePrice();
});

function updatePrice () {
    let total = 0;
    let type = "";
    let color = "";
    let material = "";
    let transport = "Notransport";
    if (chairType.textContent === "Chair Clair") type = "Clair";
    if (chairType.textContent === "Chair Margarita") type = "Margarita";
    if (chairType.textContent === "Chair Selena") type = "Selena";
    if (chairColor.textContent === "Czerwony") {
        color = "Red";
        image.src = "./images/red_chair.png";
    }
    if (chairColor.textContent === "Pomarańczowy") {
        color = "Orange";
        image.src = "./images/orange_chair.png";
    }
    if (chairColor.textContent === "Czarny") {
        color = "Black";
        image.src = "./images/black_chair.png";
    }
    if (chairMaterial.textContent === "Skóra") material = "Leather";
    if (chairMaterial.textContent === "Tkanina") material = "Fabric";
    if (checkbox.querySelector("input").checked) transport = "Transport";

    chairTypePrice.textContent = priceList[type];
    chairColorPrice.textContent = priceList[color];
    chairMaterialPrice.textContent = priceList[material];


    chairTransportPrice.textContent = checkbox.querySelector("input").checked ? priceList["Transport"] : "";


    total += (priceList[type] || 0) + (priceList[color] || 0) + (priceList[material] || 0) + (priceList[transport] || 0);

    return total;
}

greenButton.addEventListener("click", function (event) {
    console.log(chairType.textContent, chairColor.textContent, chairMaterial.textContent);
    if (chairType.textContent === "" || chairColor.textContent === "" || chairMaterial.textContent === "") {
        event.preventDefault();
        warning.classList.add("visible");
    }
});
