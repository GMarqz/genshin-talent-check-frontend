import api, { character } from "./api/index.js";
import cardInit from "./components/card/index.js";

console.log(api.findCharacters())

async function renderCard() {
    const $cardList: HTMLElement = document.getElementById('card-list');

    try {
        const charactersList = await api.findCharacters();
    for(let character of charactersList) {
        cardInit($cardList, character)
    } 
    } catch(err) {
        throw err;
    }
}

renderCard();