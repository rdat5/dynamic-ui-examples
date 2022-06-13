import Image1 from './img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg';
import Image2 from './img/clarissa-carbungco-uy9DJw9e_vs-unsplash.jpg';
import Image3 from './img/pexels-pixabay-357573.jpg';
import Image4 from './img/pexels-polina-tankilevitch-4518656.jpg';
import Image5 from './img/pexels-sydney-troxell-708587.jpg';

class ImageCarousel{
  static images = [Image1, Image2, Image3, Image4, Image5];

  static generateCarouselElement()
  {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');
    const blackBG = document.createElement('div');
    blackBG.style.background = "black";
    blackBG.style.width = '100%';
    blackBG.style.height = '100%';
    blackBG.style.position = 'absolute';
    sliderContainer.appendChild(blackBG);

    this.images.forEach((imgPath, indx) => {
      const slide = document.createElement('div');
      slide.classList.add('slide');
      const slideImage = new Image();
      slideImage.src = imgPath;
      slide.appendChild(slideImage);
      sliderContainer.appendChild(slide);

      slide.style.transform = `translateX(${indx * 100}%)`;
    });

    const nextButton = document.createElement('button');
    nextButton.classList.add('btn-next');
    nextButton.textContent = '>';
    sliderContainer.appendChild(nextButton);
    
    const prevButton = document.createElement('button');
    prevButton.classList.add('btn-prev');
    prevButton.textContent = '<';
    sliderContainer.appendChild(prevButton);

    const navDotContainer = document.createElement('div');
    // navDotContainer.textContent = 'aaa';
    navDotContainer.style.margin = 0;
    navDotContainer.style.padding = 0;
    navDotContainer.style.position = 'absolute';
    navDotContainer.style.width = '100%';
    navDotContainer.style.bottom = '2%';
    navDotContainer.style.display = 'flex';
    navDotContainer.style.justifyContent = 'center';
    navDotContainer.style.gap = '1rem';
    // navDotContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.33)';

    sliderContainer.appendChild(navDotContainer);

    this.images.forEach((imgPath, indx) => {
      const navDot = document.createElement('button');
      navDot.classList.add('navdot');
      navDot.setAttribute('index', indx);
      navDot.textContent = indx;
      navDot.style.fontSize = '0.6rem';
      navDot.style.padding = '0.5rem';
      navDot.style.borderRadius = '100px';
      navDot.style.border = 'none';
      navDotContainer.appendChild(navDot);
    })

    return sliderContainer;
  }
} 

export default ImageCarousel;
