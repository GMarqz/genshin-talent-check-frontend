import createInputSelect from "./modalInputSelect.js";
export default function createModal(parentElement, character) {
    const $cardModal = document.createElement("DIV");
    $cardModal.className = "card-modal";
    $cardModal.id = "card-modal";
    parentElement.appendChild($cardModal);
    $cardModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h5>${character.name}</h5>
                <button type="button" class="modal-header-btn" id="modal-btn-close" aria-label="Close"></button>
            </div>

            <div class="modal-body" id="modal-body">
                <p class="modal-character-description">${character.description}</p>
                ${setTimeout(() => {
        createInputSelect("Normal Attack", character.talents.normalAtk);
    }, 2000)}
                ${setTimeout(() => {
        createInputSelect("Elemental Skill", character.talents.elementalSkill);
    }, 2000)}
                ${setTimeout(() => {
        createInputSelect("Elemental Burst", character.talents.elementalBurst);
    }, 2000)}
            </div>

            <div class="modal-footer">
                <button type="button" class="modal-btn" id="modal-btn-close">Close</button>
                <button type="button" class="modal-btn" id="modal-btn-save">Save changes</button>
            </div>
        </div>
    `;
    // Link referencia para modal: https://www.w3schools.com/howto/howto_css_modals.asp
    // Link de referencia para o modal: https://getbootstrap.com/docs/5.3/components/modal/
    // Link de referencia para o input select do modal: https://getbootstrap.com/docs/5.3/forms/input-group/
}
