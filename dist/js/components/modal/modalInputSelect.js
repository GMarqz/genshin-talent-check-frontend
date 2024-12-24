export const modalInputSelect = {
    talentLevelInputSelect(parentElement, talentSkill, characterTalentCurrentLevel) {
        // const $parentElement = document.getElementById("modal-body") as HTMLDivElement;
        const $inputSelect = document.createElement("div");
        $inputSelect.className = "modal-input-select";
        $inputSelect.id = "modal-input-select";
        parentElement.appendChild($inputSelect);
        $inputSelect.innerHTML = `
            <label class="input-group-text" for="inputGroupSelect01">${talentSkill} Level</label>
            <select class="form-select" id="inputGroupSelect01">
                <option selected>${characterTalentCurrentLevel}</option>
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
    },
    characterBuildingStatusInputSelect(parentElement, characterStatus) {
        const $statusInputSelect = document.createElement("div");
        $statusInputSelect.className = "input-group mb-3";
        parentElement.appendChild($statusInputSelect);
        $statusInputSelect.innerHTML = `
          <label class="input-group-text" for="inputGroupSelect01">Building status</label>
            <select class="form-select" id="inputGroupSelect01">
                <option selected>${characterStatus}</option>
                <option value="building">Building</option>
                <option value="break">Break</option>
                <option value="notBuilding">Not Building</option>
            </select>
        `;
        return $statusInputSelect;
    }
};
