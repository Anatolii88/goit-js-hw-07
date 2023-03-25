import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Отслеживаю список с классом gallery
const galleryEl = document.querySelector('.gallery')

// Создаю разметку по массиву galleryItems
function getGalleryItems(galleryItems) { 
  
  return galleryItems.map(element => {
  return `<li class="gallery__item"><a class="gallery__link" href="${element.original}"><img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    /></a></li>`
}).join('')
}
// Добавляю разметку в список gallery
galleryEl.innerHTML= getGalleryItems(galleryItems)

// Добавляю слушателя события  на  список  gallery , использую делегирование 
galleryEl.addEventListener('click', onItemClick)
function onItemClick(e) { 
  e.preventDefault()
  if (!e.target.classList.contains('gallery__image')) { 
    return;
  }
  // Библиотека basicLightBox
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">

`)
  instance.show()  
}
