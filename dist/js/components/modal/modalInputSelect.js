export default function createInputSelect(talentSkill, characterCurrentLevel) {
    const $parentElement = document.getElementById("modal-body");
    const $inputSelect = document.createElement("div");
    $inputSelect.className = "modal-input-select";
    $inputSelect.id = "modal-input-select";
    $parentElement.appendChild($inputSelect);
    $inputSelect.innerHTML = `
        <label class="input-group-text" for="inputGroupSelect01">${talentSkill} Level</label>
        <select class="form-select" id="inputGroupSelect01">
            <option selected>${characterCurrentLevel}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        <span class="input-select-span" id="input-select-span"></span>
    `;
    return $inputSelect;
}
