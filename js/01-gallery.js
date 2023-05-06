import { galleryItems } from './gallery-items.js';
// Change code below this line


// ⬇️⬇️⬇️Following lines include a link in the head for the styles files CSS. According the recomendation of basicLightbox repository.

const upperHead = document.querySelector("head");
const stylesFile = document.createElement("link");
stylesFile.rel = "stylesheet";
stylesFile.href = "/node_modules/basiclightbox/dist/basicLightbox.min.css";
upperHead.append(stylesFile);

// ⬇️⬇️⬇️Following lines include a js script at the end of the body. According the recomendation of basicLightbox repository.

const bottomBody = document.querySelector("body");
const jsLink = document.createElement("script");
jsLink.src = "/node_modules/basiclightbox/dist/basicLightbox.min.js";
bottomBody.append(jsLink);

// ⬇️⬇️⬇️ Following lines create the gallery using a for each loop in the imported array coming from gallery-items.js file' On top of that these lines add classes to include styles alreedy defined in the styles.css file.

const uList = document.querySelector("ul.gallery");

galleryItems.forEach(array_element => {
  
  const liItem = document.createElement("li");
  uList.append(liItem);
  liItem.classList.add("gallery__item");

  let newAnchor = document.createElement("a");
  liItem.append(newAnchor);
  newAnchor.href = array_element.original;
  newAnchor.classList.add("gallery__link");

  let newImg = document.createElement("img");
  newImg.src = array_element.preview;
  newImg.alt = array_element.description;
  newAnchor.append(newImg);
  newImg.classList.add("gallery__image");

});

// ⬇️⬇️⬇️ Following lines will include basiclightbox methods.

const anchors = document.querySelectorAll(".gallery__link");

console.log(anchors);

anchors.forEach((elemento) => {

  elemento.addEventListener("click", function (event) {

    event.preventDefault();
    console.log("OJO dio click");
  });

});