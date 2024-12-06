import createModal from "./components/modal/createModal.js";
import { characters } from "./mockDB.js";
const $main = document.getElementById('main');
createModal($main, characters[0]);
function cardInit(parentElement, character) {
    const newDivElement = document.createElement("DIV");
    newDivElement.innerHTML = `
            <div class="card" id="card-${character.name.toLowerCase()}">
            <img src=${character.img.imgUrl} class="card-img-top" alt=${character.img.imgAlt} id="card-img">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">${character.description}</p>
            </div>
            <div class="card-footer">
              <button class="card-details-btn" id="card-details-btn">Details</button>
            </div>
          </div>
        `;
    parentElement.appendChild(newDivElement);
}
characters.forEach((character) => {
    cardInit($main, character);
});
//Link para fazer modal:
// https://www.w3schools.com/howto/howto_css_modals.asp
