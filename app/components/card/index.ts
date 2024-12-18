// import createModal from "../modal/index.js";
import { character } from "../../api/index.js";

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
    $cardImgTop.src = `${character.pic}`;
    $cardImgTop.className = "card-img-top";
    $cardImgTop.alt = "";
    // $cardImgTop.alt = `${character.img.imgAlt}`;
  

    const $cardBody = document.createElement("div") as HTMLDivElement;
    $cardBody.className = "card-body";

    const $cardTitle = document.createElement("h5") as HTMLHeadingElement;
    $cardTitle.className = "card-title";
    $cardTitle.textContent = `${character.name}`;

    const $cardText = document.createElement("p") as HTMLParagraphElement;
    $cardText.className = "card-text";
    $cardText.textContent = `${character.description}`;

    const $cardBtn = document.createElement("button") as HTMLButtonElement;
    $cardBtn.classList.add("btn", "btn-primary");
    $cardBtn.textContent = "Details";
    
    parentElement.appendChild($card);
    $card.appendChild($cardImgTop);
    $card.appendChild($cardBody);
    $cardBody.appendChild($cardTitle);
    $cardBody.appendChild($cardText);
    $cardBody.appendChild($cardBtn);

    // createModal($card, character);
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
