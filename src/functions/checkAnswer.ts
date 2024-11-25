import { IQuestion } from "../interfaces/IQuestion";

export let counterRight: number = 0;
export let counterFalse: number = 0;

export function checkAnswer(i: number, question: IQuestion, event: Event): void {
    const paragraph = event.target as HTMLElement;
    const counter1 = document.querySelector("#counterRight");
    const counter2 = document.querySelector("#counterFalse");

    if (i === question.correct) {
        counterRight++;
        paragraph.style.color = "green";
        if (counter1) {
            counter1.innerHTML = `korrekte Antworten: ${counterRight}`;
        }
    } else {
        counterFalse++;
        paragraph.style.color = "red";
        if (counter2) {
            counter2.innerHTML = `falsche Antworten: ${counterFalse}`;
        }
    }
}
