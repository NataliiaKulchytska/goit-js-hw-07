import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');
const markupFunEl = markupDataArray(galleryItems)
// console.log(divGallery);
containerGallery.addEventListener('click', clickImgModal())

function markupDataArray() {
  return galleryItems.map(({ preview, original, description }) => {
   return `<div class = gallery_item>
         <a class = gallery__link href='${original}'>
      <img
      class= 'gallery__image'
      src= '${preview}'
      data-source= '${original}'
      alt='${description}'
    />
  </a>
</div>`})
        .join('');
    
    
};
containerGallery.insertAdjacentHTML('afterbegin', markupFunEl);

function clickImgModal(e) {
  e.preventDefault();
  
};