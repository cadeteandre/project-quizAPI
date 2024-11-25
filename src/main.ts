import { fetchQuestions } from "./functions/fetch";
import { startGame } from "./functions/startGame";
import { IQuestion } from "./interfaces/IQuestion";

export const questionEinfach: IQuestion[] = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/leicht.json");
export const questionEasy: IQuestion[] = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/easy.json");
export const questionSchwer: IQuestion[] = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/schwer.json");
export const questionHard: IQuestion[] = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/hard.json");

//* ------------------ Selecting HTML elements ------------------
const startBtn = document.querySelector("#start-btn") as HTMLButtonElement;

startBtn.addEventListener("click", startGame);