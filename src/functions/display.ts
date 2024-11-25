import { IQuestion } from "../interfaces/IQuestion";
import { checkAnswer } from "./checkAnswer";

export const showQuizDiv = document.querySelector('#showQuiz') as HTMLDivElement;

export function displayQuestion(question: IQuestion, allQuestions: IQuestion[]) {
    const questionContainer = document.createElement('div') as HTMLDivElement;
    questionContainer.classList.add('question__container');
    const questionH3 = document.createElement('h3') as HTMLHeadElement;

    questionH3.textContent = question.question;
    questionContainer.appendChild(questionH3);

    question.answers.forEach((answer, index) => {
        const answerParagraph = document.createElement('p') as HTMLParagraphElement;
        answerParagraph.textContent = answer;
        answerParagraph.addEventListener('click', (event: Event) => checkAnswer(index, question, event, allQuestions));
        questionContainer.appendChild(answerParagraph);
    })
    showQuizDiv.appendChild(questionContainer);
}