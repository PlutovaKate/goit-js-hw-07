import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery">
        <a class="gallery__item" href = ${original}>
            <img 
                class = "gallery__image"
                src = ${preview} 
                alt = ${description}
            />
        </a>
    </li>`;
  })
  .join("");

  galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery__item", {
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});