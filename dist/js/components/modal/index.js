import { buttons } from "../button/index.js";
import { modalInputSelect } from "./modalInputSelect.js";
export default function createModal(character) {
    const $mainElement = document.getElementById("main");
    const $modal = document.createElement("div");
    $modal.className = "modal fade";
    $modal.id = "exampleModal";
    $modal.setAttribute("aria-labelledby", "exampleModalLabel");
    $modal.ariaHidden = "true";
    $modal.tabIndex = -1;
    const $modalDialog = document.createElement("div");
    $modalDialog.className = "modal-dialog";
    const $modalContent = document.createElement("div");
    $modalContent.className = "modal-content";
    const $modalHeader = document.createElement("div");
    $modalHeader.className = "modal-header";
    const $modalTitle = document.createElement("h5");
    $modalTitle.className = "modal-title";
    $modalTitle.textContent = character.name;
    const $modalHeaderCloseBtn = buttons.closeBtn("btn-close", "");
    $modalHeaderCloseBtn.ariaLabel = "Close";
    const $modalBody = document.createElement("div");
    $modalBody.className = "modal-body";
    const $modalBodyText = document.createElement("p");
    $modalBodyText.className = "modal-body-text";
    $modalBodyText.textContent = character.description;
    modalInputSelect.characterBuildingStatusInputSelect($modalBody, character.status);
    modalInputSelect.talentLevelInputSelect($modalBody, "Normal Attack", character.talents.normalAtk);
    modalInputSelect.talentLevelInputSelect($modalBody, "Elemental Skill", character.talents.elementalSkill);
    modalInputSelect.talentLevelInputSelect($modalBody, "Elemental Burst", character.talents.elementalBurst);
    const $modalFooter = document.createElement("div");
    $modalFooter.className = "modal-footer";
    const $modalFooterCloseBtn = buttons.closeBtn("btn btn-secondary", "Close");
    const $modalFooterSaveBtn = buttons.normalBtn("btn btn-primary", "Save changes");
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
