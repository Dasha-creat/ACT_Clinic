import { ANSWERS_TEXT } from "../../../shared/constants/index"
import { AnswerCard } from "../../../shared/ui/index"
import "./Answers.css"

export function Answers() {
    const middle = Math.ceil(ANSWERS_TEXT.length / 2)
    const firstColumn = ANSWERS_TEXT.slice(0, middle)
    const secondColumn = ANSWERS_TEXT.slice(middle)

    return (
        <div className="answer-container">
            <p className="answer-title">Ответим на ваши вопросы</p>

            <div className="answers-list">
                <div className="column">
                    {firstColumn.map((question) => (
                        <AnswerCard
                        number={question.id}
                        question={question.question}
                        answer={question.answer}
                        key={question.id}
                        />
                    ))}
                </div>

                <div className="column">
                    {secondColumn.map((question) =>(
                        <AnswerCard
                        number={question.id}
                        question={question.question}
                        answer={question.answer}
                        key={question.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}