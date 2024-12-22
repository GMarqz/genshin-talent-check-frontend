import { character } from "../../api/index.js";
import { buttons } from "../button/index.js";
import createInputSelect from "./modalInputSelect.js";

export default function createModal(character: character): HTMLDivElement{
    const $mainElement = document.getElementById("main") as HTMLElement;

    const $modal = document.createElement("div") as HTMLDivElement;
    $modal.className = "modal fade";
    $modal.id = "exampleModal";
    $modal.setAttribute("aria-labelledby", "exampleModalLabel");
    $modal.ariaHidden = "true";
    $modal.tabIndex = -1;

    const $modalDialog = document.createElement("div") as HTMLDivElement;
    $modalDialog.className = "modal-dialog";

    const $modalContent = document.createElement("div") as HTMLDivElement;
    $modalContent.className = "modal-content";

    const $modalHeader = document.createElement("div") as HTMLDivElement;
    $modalHeader.className = "modal-header";

    const $modalTitle = document.createElement("h5") as HTMLHeadingElement;
    $modalTitle.className = "modal-title";
    $modalTitle.textContent = character.name;

    const $modalHeaderCloseBtn = buttons.closeBtn("btn-close", "") as HTMLButtonElement;
    $modalHeaderCloseBtn.ariaLabel = "Close";

    const $modalBody = document.createElement("div") as HTMLDivElement;
    $modalBody.className = "modal-body";

    const $modalBodyText = document.createElement("p") as HTMLParagraphElement;
    $modalBodyText.className = "modal-body-text";
    $modalBodyText.textContent = character.description;

    createInputSelect($modalBody, "Normal Attack", character.talents.normalAtk);
    createInputSelect($modalBody, "Elemental Skill", character.talents.elementalSkill);
    createInputSelect($modalBody, "Elemental Burst", character.talents.elementalBurst);

    const $modalFooter = document.createElement("div") as HTMLDivElement;
    $modalFooter.className = "modal-footer";

    const $modalFooterCloseBtn = buttons.closeBtn("btn btn-secondary", "Close") as HTMLButtonElement;
    const $modalFooterSaveBtn = buttons.normalBtn("btn btn-primary", "Save changes") as HTMLButtonElement;

    $mainElement.appendChild($modal);
    $modal.appendChild($modalDialog);
    $modalDialog.appendChild($modalContent);

    $modalContent.appendChild($modalHeader);
    $modalHeader.appendChild($modalTitle);
    $modalHeader.appendChild($modalHeaderCloseBtn);

    $modalContent.appendChild($modalBody);
    $modalBody.appendChild($modalBodyText);

    $modalContent.appendChild($modalFooter);
    $modalFooter.appendChild($modalFooterCloseBtn);
    $modalFooter.appendChild($modalFooterSaveBtn);

    return $modal;
// Link referencia para modal: https://www.w3schools.com/howto/howto_css_modals.asp
// Link de referencia para o modal: https://getbootstrap.com/docs/5.3/components/modal/
// Link de referencia para o input select do modal: https://getbootstrap.com/docs/5.3/forms/input-group/
}