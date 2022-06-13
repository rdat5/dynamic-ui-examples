import './style.css';
import ImageCarousel from './ImageCarousel';

const menuButton = document.querySelector('.menu-button');
const menuItemContainerElem = document.querySelector('.menu-item-container');
const mainElem = document.querySelector('.page-main');

menuItemContainerElem.style.display = 'none';

menuButton.addEventListener('click', () => {
  if (menuItemContainerElem.style.display === 'none')
  {
    menuItemContainerElem.style.display = 'block';
  }
  else if (menuItemContainerElem.style.display === 'block')
  {
    menuItemContainerElem.style.display = 'none';
  }
})

mainElem.appendChild(ImageCarousel.generateCarouselElement());

const slides = document.querySelectorAll('.slide');
const navDots = document.querySelectorAll('.navdot');
const nextSlide = document.querySelector('.btn-next');
const prevSlide = document.querySelector('.btn-prev');

let currentSlide = 0;
let maxSlide = slides.length - 1;

slides.forEach((sld, indx) => {
  sld.style.transform = `translateX(${indx * 100}%)`;
});

nextSlide.addEventListener('click', () => {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  }
  else
  {
    currentSlide += 1;
  }

  slides.forEach((sld, indx) => {
    sld.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
});

prevSlide.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  }
  else
  {
    currentSlide -= 1;
  }

  slides.forEach((sld, indx) => {
    sld.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
});

navDots.forEach((nvd, indx) => {
  nvd.addEventListener('click', () => {
    currentSlide = indx;

    slides.forEach((sld, indx) => {
      sld.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
    });
  });
});