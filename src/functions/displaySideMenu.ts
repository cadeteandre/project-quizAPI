import { startGame } from "./startGame";

const section = document.querySelector("#sideMenu") as HTMLDivElement;

export function displaySideMenu() {
    const h3 = document.createElement("h3");
    h3.textContent = "Dein aktueller Score";
    section.appendChild(h3);

    const pRight = document.createElement("p");
    pRight.textContent = `korrekte Antworten: 0`;
    pRight.id = "counterRight";
    section.appendChild(pRight);

    const pFalse = document.createElement("p");
    pFalse.textContent = `falsche Antworten: 0`;
    pFalse.id = "counterFalse";
    section.appendChild(pFalse);

    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener("click", startGame);
    section.appendChild(resetBtn);

    const backToMenuBtn = document.createElement("button");
    backToMenuBtn.textContent = "Back to Menu";
    backToMenuBtn.addEventListener("click", () => {
        location.reload();
    });
    section.appendChild(backToMenuBtn);
}
