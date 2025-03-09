import { chosen } from "../../../../shared/assets"
import "./AnswerCard.css"

export const AnswerCard = ({ answer, index, selectedAnswer, onSelect }) => (
    <div className="text-icon-card" key={`card-${index}`}>
      <div
        className={`img-answer-card ${selectedAnswer === index ? "selected" : ""}`}
        onClick={() => onSelect(index)}
      >
        <img 
          src={answer.icon} 
          alt="icon" 
          className={`answer-icon ${
            answer.transparency === "bottom" ? "transparent-bottom" :
            answer.transparency === "top" ? "transparent-top" : ""
          }`}
        />
        {selectedAnswer === index && <img src={chosen} alt="chosen" className="chosen" />}
      </div>
      <span className="font300-24 font-black">{answer.text}</span>
    </div>
  )