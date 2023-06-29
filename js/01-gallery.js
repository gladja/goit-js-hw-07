import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onClickElementGallery);

function createdElementGallery(galleryItems) {
  return galleryItems.map(itm => {
    return `
   <li class='gallery__item'>
   <a class='gallery__link' href='${itm.original}'>
     <img
       class='gallery__image'
       src='${itm.preview}'
       data-source='large-image.jpg'
       alt='Image description'
     />
   </a>
 </li>
  `;
  }).join('');
}

const element = createdElementGallery(galleryItems);
// console.log(element);
galleryEl.insertAdjacentHTML('beforeend', element);

function onClickElementGallery(event) {
  event.preventDefault();
  if(!event.target.classList.contains('gallery__image')) {
    return
  }

  console.log('yes');

}