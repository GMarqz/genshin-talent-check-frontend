import createModal from "./components/modal/index.js";
import { character, characters } from "./mockDB.js";

const $main: HTMLElement = document.getElementById('main');

function cardInit(parentElement: HTMLElement, character: character): HTMLDivElement {
    const $newDivElement = document.createElement("DIV") as HTMLDivElement;
    $newDivElement.innerHTML = `
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

        parentElement.appendChild($newDivElement);
        createModal($newDivElement, character);

        return $newDivElement;
}

characters.forEach((character) => {
    cardInit($main, character);
});


const $modal = document.getElementById("card-modal");
const $cardDetailsBtn = document.getElementById("card-details-btn");
$cardDetailsBtn.onclick = () => {
  $modal.style.display = "block";
}

const $modalHeaderBtn = document.getElementById("modal-btn-close");
$modalHeaderBtn.onclick = () => {
  $modal.style.display = "none";
}

window.onclick = (event: any) => {
  if (event.target === $modal) {
    $modal.style.display = "none";
  }
}


//Link para fazer modal:
// https://www.w3schools.com/howto/howto_css_modals.asp