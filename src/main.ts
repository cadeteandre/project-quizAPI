import { fetchQuestions } from "./functions/fetch";
import { startGame } from "./functions/startGame";
import { IQuestion } from "./interfaces/IQuestion";

export let questionEinfach: IQuestion[] = [];
export let questionEasy: IQuestion[] = [];
export let questionSchwer: IQuestion[] = [];
export let questionHard: IQuestion[] = [];

async function initQuestions() {
    questionEinfach = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/leicht.json");
    questionEasy = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/easy.json");
    questionSchwer = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/schwer.json");
    questionHard = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/hard.json");
}

initQuestions();

//* ------------------ Selecting HTML elements ------------------
const startBtn = document.querySelector("#start-btn") as HTMLButtonElement;

startBtn.addEventListener("click", startGame);