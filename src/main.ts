import { counterRight } from "./functions/checkAnswer";
import { displayQuestion, showQuizDiv } from "./functions/display";
import { fetchQuestions } from "./functions/fetch";
import { IQuestion } from "./interfaces/IQuestion";

const questionEinfach: IQuestion[] = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/leicht.json");
const questionEasy: IQuestion[] = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/easy.json");
const questionSchwer: IQuestion[] = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/schwer.json");
const questionHard: IQuestion[] = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/hard.json");

//* ------------------ Selecting HTML elements ------------------
const easyInputRadio = document.querySelector('#easy-btn') as HTMLInputElement;
const languageSelect = document.querySelector('#language') as HTMLSelectElement;
const startBtn = document.querySelector('#start-btn') as HTMLButtonElement;
const menuDiv = document.querySelector('#menuDiv') as HTMLDivElement;

startBtn.addEventListener('click', () => {
    menuDiv.innerHTML = '';

    if( easyInputRadio.checked ) {
        if( languageSelect.value === 'de' ) {
            questionEinfach.forEach((question) => displayQuestion(question));
        } else {
            questionEasy.forEach((question) => displayQuestion(question));
        }
    } else {
        if( languageSelect.value === 'de' ) {
            questionSchwer.forEach((question) => displayQuestion(question));
        } else {
            questionHard.forEach((question) => displayQuestion(question));
        }
    }
})