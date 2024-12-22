export const buttons = {
    normalBtn(thisBtnClassName, textContent) {
        const $btn = document.createElement("button");
        $btn.type = "button";
        $btn.className = thisBtnClassName;
        $btn.textContent = textContent;
        return $btn;
    },
    closeBtn(thisBtnClassName, textContent) {
        const $closeBtn = document.createElement("button");
        $closeBtn.type = "button";
        $closeBtn.className = thisBtnClassName;
        $closeBtn.setAttribute("data-bs-dismiss", "modal");
        $closeBtn.textContent = textContent;
        // if(textContent === true) {
        //     return $closeBtn.textContent = "Close";
        // } else if(textContent === false) {
        //     return $closeBtn.ariaLabel = "Close";
        // } else {
        //     console.log(`Error: "textContent" paramms should be either true or false.`);
        // }
        return $closeBtn;
    }
};
