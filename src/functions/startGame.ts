import { questionEasy, questionEinfach, questionHard, questionSchwer } from "../main";
import { setCounterFalse, setCounterRight } from "./checkAnswer";
import { displayQuestion, showQuizDiv } from "./display";
import { displaySideMenu } from "./displaySideMenu";

const easyInputRadio = document.querySelector("#easy-btn") as HTMLInputElement;
const languageSelect = document.querySelector("#language") as HTMLSelectElement;
const menuDiv = document.querySelector("#menuDiv") as HTMLDivElement;
const sideMenu = document.querySelector("#sideMenu") as HTMLDivElement;
const app = document.querySelector("#app") as HTMLDivElement;

export function startGame() {
    menuDiv.innerHTML = "";
    showQuizDiv.innerHTML = "";
    sideMenu.innerHTML = "";

    app.style.flexDirection = "row";
    showQuizDiv.style.display = "flex";

    setCounterFalse(0);
    setCounterRight(0);

    if (easyInputRadio.checked) {
        if (languageSelect.value === "de") {
            questionEinfach.forEach((question) => displayQuestion(question));
        } else {
            questionEasy.forEach((question) => displayQuestion(question));
        }
    } else {
        if (languageSelect.value === "de") {
            questionSchwer.forEach((question) => displayQuestion(question));
        } else {
            questionHard.forEach((question) => displayQuestion(question));
        }
    }

    displaySideMenu();
}
