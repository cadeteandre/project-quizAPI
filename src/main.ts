import { fetchQuestions } from "./functions/fetch";
import { IQuestion } from "./interfaces/IQuestion";

const questionEinfach: IQuestion[] = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/leicht.json");
const questionEasy: IQuestion[] = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/easy.json");
const questionSchwer: IQuestion[] = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/schwer.json");
const questionHard: IQuestion[] = await fetchQuestions("https://vz-wd-24-01.github.io/typescript-quiz/questions/hard.json");