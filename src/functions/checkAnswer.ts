import { IQuestion } from "../interfaces/IQuestion";

let counterRight: number = 0;
let counterFalse: number = 0;

export function checkAnswer(i: number, question: IQuestion, event: Event): void {
    const paragraph = event.target as HTMLElement;
    const counter1 = document.querySelector("#counterRight");
    const counter2 = document.querySelector("#counterFalse");
    const siblings: HTMLElement[] = [];
    const parent = paragraph.parentNode;
    const isUsed: boolean = paragraph.classList.contains("used");

    if (isUsed) return;

    if (parent) {
        const children = parent.children;
        for (let i: number = 0; i < children.length; i++) {
            if (children[i].tagName !== "H3") {
                children[i].classList.add("used");
                siblings.push(children[i] as HTMLElement);
            }
        }
    }

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

export function setCounterRight(newValue: number) {
    counterRight = newValue;
}

export function getCounterRight() {
    return counterRight;
}

export function setCounterFalse(newValue: number) {
    counterFalse = newValue;
}

export function getCounterFalse() {
    return counterFalse;
}
