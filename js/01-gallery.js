import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');


galleryEl.addEventListener('click', onClickElementGallery);
// galleryEl.addEventListener('click', )

function createdElementGallery(galleryItems) {
  return galleryItems.map(itm => {
    return `
   <li class='gallery__item'>
   <a class='gallery__link' href='${itm.original}'>
     <img
       class='gallery__image'
       src='${itm.preview}'
       data-source='${itm.original}'
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

  openOriginalSize(event, galleryItems)
  // console.dir(event);
}
let instance = null

function  openOriginalSize(event) {
  console.dir(event.target.dataset.source);
    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`,{
    onShow: () => {document.addEventListener('keydown', keyboardEsc)},
      onClose: () => { document.removeEventListener('keydown', keyboardEsc) },

    })
    instance.show()
}

function keyboardEsc(event) {
  if(event.key !== 'Escape') {
    return
  }
instance.close()

  console.log(event.key);

}