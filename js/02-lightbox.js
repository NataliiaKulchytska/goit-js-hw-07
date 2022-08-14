import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector('.gallery');
const image = document.querySelector(".gallery__image");

// galleryList.addEventListener('click');



function galleryListMarkup() {
    return galleryItems.map(({ preview, original, description }) => {
 return `<li class = gallery_lists>
         <a class = gallery__item href='${original}'>
      <img
      class= 'gallery__image'
      src= '${preview}'      
      alt='${description}'
    />
  </a>
</li>`})
        .join('');
    
};

const markupFunEl = galleryListMarkup(galleryItems);
galleryList.insertAdjacentHTML('afterbegin', markupFunEl);


    let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});


// function onModalImg(e) {
//   e.preventDefault();  
 
// };
