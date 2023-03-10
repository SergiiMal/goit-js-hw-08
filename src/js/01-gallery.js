import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

 const galleryElem = document.querySelector('.gallery');
 const galleryInsertHtml = createNewGallery(galleryItems);

 function createNewGallery(galleryItems){
	
	 return galleryItems
		 .map(({ preview, original, description }) => {
			 return `
		<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
		 }).join('');
	 
 }
galleryElem.innerHTML = galleryInsertHtml;

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});



