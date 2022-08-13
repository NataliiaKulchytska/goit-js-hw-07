import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector('.gallery');
const image = document.querySelector(".gallery__image");

galleryList.addEventListener('click', onModalImg);

//  _.debounce(onCaptionImg, 250)
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

function onCaptionImg () {
image.alt= `${description}`;
}
function onModalImg(e) {
  e.preventDefault();  

};

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
  

});
gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});


