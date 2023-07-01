import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

// galleryEl.addEventListener('click', onClickElementGallery);

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

function onClickElementGallery(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  openOriginalSize(galleryItems);
  // console.dir(event);
}

let gallery = new SimpleLightbox('.gallery a',
  {
    fadeSpeed: 300,
    animationSpeed: 250,
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

function openOriginalSize(galleryItems) {
  // console.log('yes');
  // let gallery = new SimpleLightbox('.gallery a', { fadeSpeed: 300 });
  gallery.on('show.simplelightbox', function() {
    // return galleryItems.map(itm => {
    return `
      <span>${galleryItems.description[0]}</span>
      `;
    // }).join('');
  });
  gallery.on('closed.simplelightbox', function() {

  });

}