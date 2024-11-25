import { IQuestion } from "../interfaces/IQuestion";

export async function fetchQuestions(url: string) {
    const result = await fetch(url);
    const questions: IQuestion[] = await result.json();
    return questions;
}
