import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryElement = createGalleryItems(galleryItems);

function createGalleryItems(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<li>
         <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
         </a>
         </li>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", galleryElement);

var lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });
