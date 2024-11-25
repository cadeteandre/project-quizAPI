import { IQuestion } from "../interfaces/IQuestion";

const showQuizDiv = document.querySelector('#showQuiz') as HTMLDivElement;

export function displayQuestion(question: IQuestion) {
    const questionContainer = document.createElement('div') as HTMLDivElement;
    const questionH3 = document.createElement('h3') as HTMLHeadElement;

    questionH3.textContent = question.question;
    questionContainer.appendChild(questionH3);

    question.answers.forEach((answer, index) => {
        const answerParagraph = document.createElement('p') as HTMLParagraphElement;
        answerParagraph.textContent = answer;
        // answerParagraph.addEventListener('click', checkAnswer(index, question));
        questionContainer.appendChild(answerParagraph);
    })
    showQuizDiv.appendChild(questionContainer);
}