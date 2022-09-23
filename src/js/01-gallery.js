import { galleryItems } from './gallery-items';
import  SimpleLightbox  from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


// Change code below this line
const imgConteiner = document.querySelector('.gallery');
const galleryMarcup = createGalaryMarcup(galleryItems);
imgConteiner.insertAdjacentHTML('beforeend',galleryMarcup)
let lightbox = new SimpleLightbox('.gallery a', {captionDelay:250 });
    console.log(lightbox)

imgConteiner.addEventListener('click', onPicturesClick)

function createGalaryMarcup(galleryItems){
    return galleryItems
    .map(({ preview, original, description }) => {
      return` 
      <a class="gallery__item" href="${ original}">
  <img class="gallery__image"src="${preview}"alt="${description}" title= ${description}/>
</a>`}).join('');
}

function onPicturesClick(event){
  event.preventDefault();

 const noEventGallary = event.target.nodeName;
     //если действие происходит не в нашем диве == ничего не происходит 
  if (noEventGallary !== 'IMG'){
        return;
    }
}
