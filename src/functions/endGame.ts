import { IQuestion } from "../interfaces/IQuestion";

export function endGame(correctAnswers: number, allQuestions: IQuestion[]): void {
    const modal = document.querySelector('#quizResultModal') as HTMLDivElement;
    const correctAnswersElement = document.querySelector('#correctAnswers') as HTMLSpanElement;
    const totalQuestionsElement = document.querySelector('#totalQuestions') as HTMLSpanElement;
    const allAnswers = document.querySelectorAll('.used') as NodeListOf<HTMLParagraphElement>;

    correctAnswersElement.textContent = correctAnswers.toString();
    totalQuestionsElement.textContent = allQuestions.length.toString();
    const rightAnswers = allQuestions.map((question) => question.answers[question.correct]);
    
    for(let i: number = 0; i < rightAnswers.length; i++) {
        allAnswers.forEach((answer) => {
            if(answer.textContent === rightAnswers[i]) {
                answer.style.color = 'green';
            }
        })
    }

    modal.classList.remove('hidden');

    const closeModalButton = document.querySelector('#closeModal') as HTMLButtonElement;
    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    })
}