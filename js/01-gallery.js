import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li> */

const galleryEl = document.querySelector('.gallery')


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
galleryEl.innerHTML= getGalleryItems(galleryItems)

galleryEl.addEventListener('click', onItemClick)
function onItemClick(e) { 
  e.preventDefault()
  if (!e.target.classList.contains('gallery__image')) { 
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">

`)
  instance.show()
}
