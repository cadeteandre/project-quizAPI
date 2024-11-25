import { IQuestion } from "../interfaces/IQuestion";

export let counterRight: number = 0;
export let counterFalse: number = 0;

export function checkAnswer(i: number, question: IQuestion, event: Event): void {
    const paragraph = event.target as HTMLElement;
    if (i === question.correct) {
        counterRight++;
        paragraph.style.color = "green";
    } else {
        counterFalse++;
        paragraph.style.color = "red";
    }
}
