let currentIndex = 0;

function moveSlide(direction) {
  const slider = document.querySelector('.slider');
  const totalCards = document.querySelectorAll('.card').length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalCards - 1; // Wrap around to the last card
  } else if (currentIndex >= totalCards) {
    currentIndex = 0; // Wrap around to the first card
  }

  const offset = -currentIndex * 100; // Calculate the offset to slide
  slider.style.transform = `translateX(${offset}%)`;
}

