let currentIndex = 0;
const images = document.querySelectorAll('.gallery-slider img');

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  scrollToImage();
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  scrollToImage();
}
