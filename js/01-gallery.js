import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');
const image = document.querySelector('.gallery__image');
// console.log(divGallery);
containerGallery.addEventListener('click', onClickImgModal);
// containerGallery.addEventListener('keydown', onCloseModalKey);
 


const markupFunEl = markupDataArray(galleryItems);    
   
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
 
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

    const instance = basicLightbox.create(` 
        <img src='' width="800" height="600">
    `, {onShow: (instance) => { document.addEventListener('keydown', onCloseModalKey) },
      onClose: (instance) => { document.removeEventListener('keydown', onCloseModalKey)},
    });
    
 
function onClickImgModal(e) {
  e.preventDefault();
 
  const { target } = e;
  if (target.localName !== 'img') {
    return;
  }  
   const selectedImage = e.target.dataset.source; 
  instance.element().querySelector('img').src = selectedImage; 
   
  instance.show();
};

 function onCloseModalKey(e) {
  
  if (e.code === 'Escape') {
    instance.close();
  }
	
};  
  

 
 

     


 

     
