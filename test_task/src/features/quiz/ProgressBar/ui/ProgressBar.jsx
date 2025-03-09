import { QUESTIONS } from "../../../../shared/constants/index"
import "./ProgressBar.css"

export const ProgressBar = ({ currentQuestionIndex, quizCompleted }) => (
    <div className="progress-bar">
      {QUESTIONS.map((_, index) => (
        <div
          key={index}
          className={`progress ${quizCompleted ? (index === 0 ? "active" : "") : (index <= currentQuestionIndex ? "active" : "")}`}
        />
      ))}
    </div>
  )
  