const images = [
  { src: 'img1.jpg', caption: 'Beautiful Machu Picchu' },
  { src: 'img2.jpg', caption: 'Sunset Over the Mountains' },
  { src: 'img3.jpg', caption: 'Crystal Clear Beach' },
  { src: 'img4.jpg', caption: 'Starry Night Sky' }
];

const slidesContainer = document.getElementById('slides-container');
let currentIndex = 0;

// Dynamically create slides
images.forEach((img) => {
  const slide = document.createElement('div');
  slide.classList.add('slide');

  slide.innerHTML = `
    <img src="${img.src}" alt="${img.caption}">
    <div class="caption">${img.caption}</div>
  `;

  slidesContainer.appendChild(slide);
});

const totalSlides = images.length;

function showSlide(index) {
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto-slide every 3 seconds
setInterval(() => {
  nextSlide();
}, 3000);

// Show initial slide
showSlide(currentIndex);
