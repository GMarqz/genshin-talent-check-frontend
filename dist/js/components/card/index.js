export default function cardInit(parentElement, character) {
    const $card = document.createElement("div");
    $card.className = "card";
    $card.setAttribute("style", "width: 18rem;");
    const $cardImgTop = document.createElement("img");
    $cardImgTop.src = `${character.pic}`;
    $cardImgTop.className = "card-img-top";
    $cardImgTop.alt = "";
    // $cardImgTop.alt = `${character.img.imgAlt}`;
    const $cardBody = document.createElement("div");
    $cardBody.className = "card-body";
    const $cardTitle = document.createElement("h5");
    $cardTitle.className = "card-title";
    $cardTitle.textContent = `${character.name}`;
    const $cardText = document.createElement("p");
    $cardText.className = "card-text";
    $cardText.textContent = `${character.description}`;
    const $cardBtn = document.createElement("button");
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
