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

//znikający element

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