
// karthik carousel
const carouselCards = document.querySelector('.kcarousel-cards');
const prevButton = document.querySelector('.kcarousel-btn.prev');
const nextButton = document.querySelector('.kcarousel-btn.next');

let currentIndex = 0;
const cardCount = document.querySelectorAll('.kcard-content').length;

function getVisibleCards() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 3;
    return 5;
}

function updateCarousel() {
    const visibleCards = getVisibleCards();
    const cardWidth = 100 / visibleCards;
    const offset = -(currentIndex * cardWidth);

    document.querySelectorAll('.kcard-content').forEach(card => {
        card.style.flex =` 0 0 ${cardWidth}%`;
    });

    carouselCards.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    const visibleCards = getVisibleCards();
    const remainingCards = cardCount - currentIndex - visibleCards;

    if (remainingCards > visibleCards) {
        currentIndex += visibleCards;
    } else if (remainingCards > 0) {
        currentIndex += remainingCards;
    } else {
        currentIndex = 0;
    }

    updateCarousel();
});

prevButton.addEventListener('click', () => {
    const visibleCards = getVisibleCards();

    if (currentIndex - visibleCards >= 0) {
        currentIndex -= visibleCards;
    } else {
        currentIndex = 0;
    }

    updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();

 //
 //
 function showTab(tabId, event) {
    const sections = document.querySelectorAll('.search-bar');
    const tabs = document.querySelectorAll('.nav-links span');

    sections.forEach(section => section.classList.add('hidden'));
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabId).classList.remove('hidden');
    event.target.classList.add('active');
}

//  Abhi Carousel functionality
const carousel = document.querySelector('.card-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let acurrentIndex = 0; // Track the current index of the visible cards

prevBtn.addEventListener('click', () => {
    if (acurrentIndex > 0) {
        acurrentIndex--;
        aupdateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    const atotalCards = document.querySelectorAll('.card').length;
    const avisibleCards = 4; // Number of cards visible at once

    if (acurrentIndex < atotalCards - avisibleCards) {
        acurrentIndex++;
        aupdateCarousel();
    }
});

function aupdateCarousel() {
    const acardWidth = document.querySelector('.card').offsetWidth + 10; // Card width + gap
    carousel.style.transform = `translateX(-${acurrentIndex * acardWidth}px)`;
    carousel.style.transition = 'transform 0.75s ease-in-out'; // Smooth transition
}

const prevButtonTwo = document.querySelector('.prev-btn2');
const nextButtonTwo = document.querySelector('.next-btn2');
const cardGridTwo = document.querySelector('.card-grid2');

let currentIndexTwo = 0;
const cardsPerViewTwo = 4; // Number of cards to show at a time
const cardWidthTwo = document.querySelector('.card2').offsetWidth + 10; // Include gap
const totalCardsTwo = document.querySelectorAll('.card2').length;

function updateCarouselTwo() {
    const maxIndexTwo = Math.ceil(totalCardsTwo / cardsPerViewTwo) - 1;
    currentIndexTwo = Math.max(0, Math.min(currentIndexTwo, maxIndexTwo));
    const offsetTwo = -currentIndexTwo * cardsPerViewTwo * cardWidthTwo;
    cardGridTwo.style.transform = `translateX(${offsetTwo}px)`;
}

prevButtonTwo.addEventListener('click', () => {
    currentIndexTwo -= 1;
    updateCarouselTwo();
});

nextButtonTwo.addEventListener('click', () => {
    currentIndexTwo += 1;
    updateCarouselTwo();
});

// Initialize carousel
updateCarouselTwo();
