import createModal from "../modal/index.js";
import { character } from "../../api/index.js";
import { buttons } from "../button/index.js";

interface Card {
    parentElement: HTMLElement,
    cardElement: HTMLDivElement,
    cardImgTop: HTMLImageElement,
    cardBody: HTMLDivElement,
    cardTitle: HTMLHeadingElement,
    cardText: HTMLParagraphElement,
    cardButton: HTMLButtonElement
}

export default function cardInit(parentElement: HTMLElement, character: character): Card {
    const $card = document.createElement("div") as HTMLDivElement;
    $card.className = "card";
    $card.setAttribute("style", "width: 18rem;");

    const $cardImgTop = document.createElement("img") as HTMLImageElement;
    $cardImgTop.src = `${character.characterImg.imgPath}`;
    $cardImgTop.className = "card-img-top";
    $cardImgTop.alt = `${character.characterImg.imgAlt}`;
    $cardImgTop.setAttribute("style", "max-width: 100%;");
    $cardImgTop.setAttribute("style", "max-height: 15rem;");    

    const $cardBody = document.createElement("div") as HTMLDivElement;
    $cardBody.className = "card-body";

    const $cardTitle = document.createElement("h5") as HTMLHeadingElement;
    $cardTitle.className = "card-title";
    $cardTitle.textContent = `${character.name}`;

    const $cardText = document.createElement("p") as HTMLParagraphElement;
    $cardText.className = "card-text";
    $cardText.textContent = `${character.description}`;

    const $cardBtn = buttons.normalBtn("btn btn-primary", "Details");
    $cardBtn.setAttribute("data-bs-toggle", "modal");
    $cardBtn.setAttribute("data-bs-target", "#exampleModal");
    $cardBtn.addEventListener("click", () => {
        createModal(character);
    });
    
    parentElement.appendChild($card);
    $card.appendChild($cardImgTop);
    $card.appendChild($cardBody);
    $cardBody.appendChild($cardTitle);
    $cardBody.appendChild($cardText);
    $cardBody.appendChild($cardBtn);

    return {
        parentElement: parentElement,
        cardElement: $card,
        cardImgTop: $cardImgTop,
        cardBody: $cardBody,
        cardTitle: $cardTitle,
        cardText: $cardText,
        cardButton: $cardBtn
    };
}
