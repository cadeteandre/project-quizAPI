import { IQuestion } from "../interfaces/IQuestion";

export function endGame(correctAnswers: number, questions: IQuestion[]): void {
    const modal = document.querySelector('#quizResultModal') as HTMLDivElement;
    const correctAnswersElement = document.querySelector('#correctAnswers') as HTMLSpanElement;
    const totalQuestionsElement = document.querySelector('#totalQuestions') as HTMLSpanElement;

    correctAnswersElement.textContent = correctAnswers.toString();
    totalQuestionsElement.textContent = questions.length.toString();
    console.log(correctAnswersElement, totalQuestionsElement)

    modal.classList.remove('hidden');

    const closeModalButton = document.querySelector('#closeModal') as HTMLButtonElement;
    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    })
}