import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(({preview,original,description}) => {
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
}).join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", galleryClick);
function galleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}

const bigImage = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${bigImage}" width="800" height="600">
`);
  instance.show(bigImage);


  document.addEventListener("keydown", CloseImg);

  function CloseImg(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
