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

// galleryList.addEventListener('click',  _.debounce(() => {
    
// }, 250));
  

function onModalImg(e) {
  e.preventDefault();  
};


    let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function (e) { 
  
  
});
gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});

function onCaptionImg() {
  // const { target } = e;

  // if (target.localName === 'img') {
  //   target = $('.gallery a').simpleLightbox({
  //     optoins.captionType = `'${description}'`,
  //     options.captionDelay= 250,
  //     options.captionPosition= 'bottom'
  //   });
  //   console.log(onCaptionImg());
  // }

// if(options.captionType) handleScrollbar('hide');
}