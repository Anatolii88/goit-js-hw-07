import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Отслеживаю список с классом gallery
const galleryElement = document.querySelector('.gallery')

// Создаю разметку по массиву galleryItems
function getGalleryItems(galleryItems) { 
 return  galleryItems.map(function (element) {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${element.original}">
      <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
   </a>
</li>`
   }).join('')
}
// Добавляю разметку в список gallery
galleryElement.innerHTML = getGalleryItems(galleryItems)

// Использую библиотеку SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', { captionSelector: 'img', captionType: 'attr', captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom' });