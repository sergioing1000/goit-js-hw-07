import { galleryItems } from './gallery-items.js';
// Change code below this line


const uList = document.querySelector("ul.gallery");


galleryItems.forEach(element => {
  
  const liItem = document.createElement("li");
  uList.append(liItem);
  liItem.classList.add("gallery__item");

  let newAnchor = document.createElement("a");
  liItem.append(newAnchor);
  newAnchor.href = element.original;
  newAnchor.classList.add("gallery__link");

  let newImg = document.createElement("img");
  newImg.src = element.preview;
  newImg.alt = element.description;
  newAnchor.append(newImg);
  newImg.classList.add("gallery__image");

});