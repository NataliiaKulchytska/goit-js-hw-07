import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');
const image = document.querySelector('.gallery__image');
// console.log(divGallery);
containerGallery.addEventListener('click', onClickImgModal);
// containerGallery.addEventListener('keydown', onCloseModalKey);
 
// image.src = `${preview}`,
//       image.alt = `${description}`,
//       image.dataset.source = `${origin}`

const markupFunEl = markupDataArray(galleryItems);

// const markupDataArray = galleryItems.map(({ preview, original, description }) => 
//     `<div class = gallery_item>
//          <a class = gallery__link href='${original}'>
//       <img
//       class= 'gallery__image'
//       src= '${preview}'
//       data-source= '${original}'
//       alt='${description}'
//     />
//   </a>
// </div>`)
//         .join('');
    
   
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
 
const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

function onClickImgModal(e) {
  e.preventDefault();
  
  const { target } = e;   
  if (target.localName !== 'img') {
    return;    
    
  } 
   instance.show();
};

// function onCloseModalKey(e) {
//   if (e.key === 'Escape') {
//       containerGallery.classList.remove('is-open');
//   }
// };
// {
//   onShow: (instance) => {},
// 	/*
// 	 * Function that gets executed before the lightbox closes.
// 	 * Returning false will prevent the lightbox from closing.
// 	 */
// 	onClose: (instance) => {}
// }