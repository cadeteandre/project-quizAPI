import { IQuestion } from "../interfaces/IQuestion";

export async function fetchQuestions(url: string) {
    try {
        const result = await fetch(url);
        const questions: IQuestion[] = await result.json();
        return questions;
    } catch (error) {
        console.error(error);
        return [];
    }
}
