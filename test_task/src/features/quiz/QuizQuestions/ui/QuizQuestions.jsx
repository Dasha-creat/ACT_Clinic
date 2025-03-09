import { AnswerCard } from "../../AnswerCard/index"
import "./QquizQuestions.css"

export const QuizQuestion = ({ question, selectedAnswer, onSelectAnswer, onNext }) => (
    <>
      <p className="font500-28 font-black question">{question.question}</p>
      <div className="answers">
        {question.answers.map((answer, index) => (
          <AnswerCard key={index} answer={answer} index={index} selectedAnswer={selectedAnswer} onSelect={onSelectAnswer} />
        ))}
      </div>
      <button className="next-button font700-20 font-white" onClick={onNext}>
        Далее
      </button>
    </>
  )