import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

function createdElementGallery(galleryItems) {
  return galleryItems.map(itm => {
    return `
   <li class='gallery__item'>
   <a class='gallery__link' href='${itm.original}'>
     <img
       class='gallery__image'
       src='${itm.preview}'
       alt='${itm.description}'
     />
   </a>
 </li>
  `;
  }).join('');
}

const element = createdElementGallery(galleryItems);
// console.log(element);
galleryEl.insertAdjacentHTML('beforeend', element);

let gallery = new SimpleLightbox('.gallery a',
  {
    fadeSpeed: 300,
    animationSpeed: 250,
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});