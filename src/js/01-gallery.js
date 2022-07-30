import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const galleryElement = createGalleryItems(galleryItems);

function createGalleryItems(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
    <a class="gallery__link" href = "${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
  </a>
</div>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", galleryElement);

gallery.addEventListener("click", openModalWindow);

function openModalWindow(event) {
  event.preventDefault();

  const isGalleryImg = event.target.classList.contains("gallery__image");

  if (!isGalleryImg) {
    return;
  }

  const currentImgLink = event.target.dataset.source;
  const modalMarkup = `<img src="${currentImgLink}" width="800" height="600">`;

  const instance = basicLightbox.create(modalMarkup, {
    onShow: (instance) => {
      window.addEventListener("keydown", closeModalWindow);
    },

    onClose: (instance) => {
      window.removeEventListener("keydown", closeModalWindow);
    },
  });

  function closeModalWindow(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }

  instance.show();
}
