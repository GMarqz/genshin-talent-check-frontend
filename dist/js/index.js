var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import api from "./api/index.js";
import cardInit from "./components/card/index.js";
console.log(api.findCharacters());
function renderCard() {
    return __awaiter(this, void 0, void 0, function* () {
        const $cardList = document.getElementById('card-list');
        try {
            const charactersList = yield api.findCharacters();
            for (let character of charactersList) {
                cardInit($cardList, character);
            }
        }
        catch (err) {
            throw err;
        }
    });
}
renderCard();
