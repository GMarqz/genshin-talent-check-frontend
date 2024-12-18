import api, { character } from "./api/index.js";
import cardInit from "./components/card/index.js";

console.log(api.findCharacters())

async function renderCard() {
    const $main: HTMLElement = document.getElementById('main');

    try {
        const charactersList = await api.findCharacters();
    for(let character of charactersList) {
        cardInit($main, character)
    } 
    } catch(err) {
        throw err;
    }
}

renderCard();