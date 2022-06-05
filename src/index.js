import './style.css';

const menuButton = document.querySelector('.menu-button');
const menuItemContainerElem = document.querySelector('.menu-item-container');

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