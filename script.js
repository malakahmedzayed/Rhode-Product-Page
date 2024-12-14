const imgs = document.querySelectorAll('.img-select a');
let imgId = 1;

function slideImage() {
  const imgShowcase = document.querySelector('.img-showcase');
  const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
  imgShowcase.style.transform = `translateX(-${(imgId - 1) * displayWidth}px)`;
}

slideImage();

imgs.forEach((imgItem) => {
  imgItem.addEventListener('click', (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});