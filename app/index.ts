import { character, characters } from "./mockDB.js";

const $main: HTMLElement = document.getElementById('main');

function cardInit(parentElement: HTMLElement, character: character) {
    const newDivElement = document.createElement("DIV") as HTMLDivElement;
    newDivElement.innerHTML = `
            <div class="card" id="card-${character.name.toLowerCase()}">
            <img src=${character.img.imgUrl} class="card-img-top" alt=${character.img.imgAlt} id="card-img">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">${character.description}</p>
              <a href="#" class="btn">Details</a>
            </div>
          </div>
        `;

        parentElement.appendChild(newDivElement);
}

// cardInit($main, characters[0]);

characters.forEach((character) => {
    cardInit($main, character);
});