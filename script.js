let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slidesContainer = document.querySelector(".slides");
const projectsPerView = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 3;

function showSlide(index) {
    if (index > totalSlides - projectsPerView) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - projectsPerView;
    else currentIndex = index;

    let offset = -currentIndex * (100 / projectsPerView);
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
