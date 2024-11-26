import { questionEasy, questionEinfach, questionHard, questionSchwer } from '../main';
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

    if (easyInputRadio.checked) {
        if (languageSelect.value === "de") {
            questionEinfach.forEach((question) => displayQuestion(question, questionEinfach.length));
        } else {
            questionEasy.forEach((question) => displayQuestion(question, questionEasy.length));
        }
    } else {
        if (languageSelect.value === "de") {
            questionSchwer.forEach((question) => displayQuestion(question, questionSchwer.length));
        } else {
            questionHard.forEach((question) => displayQuestion(question, questionHard.length));
        }
    }

    displaySideMenu();
}