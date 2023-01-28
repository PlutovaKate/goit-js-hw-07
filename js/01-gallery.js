import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href = ${original}>
            <img 
                class = "gallery__image"
                src = ${preview} 
                data-source = ${original} 
                alt = ${description}
            />
        </a>
    </div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", openImage);
function openImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const bigImage = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${bigImage}">
`);
  instance.show();

  document.addEventListener("keydown", closeImage);

  function closeImage(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}