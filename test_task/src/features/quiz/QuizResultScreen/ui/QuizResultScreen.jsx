import { QuizResult } from "../../QuizResult/index"
import { QUIZ_RESULT_TEXT } from "../../../../shared/constants/index"
import { prize } from "../../../../shared/assets/index"
import "./QuizResultScreen.css"

export const QuizResultScreen = () => (
    <div className="result">
      <QuizResult />
      <div className="result-prize-container">
        <div className="result-text-container">
          <p className="prize-main-text font-orange">{QUIZ_RESULT_TEXT.prize.main_text}</p>
          <p className="prize-text font-black">{QUIZ_RESULT_TEXT.prize.text}</p>
        </div>
        <img src={prize} alt="prize" className="prize" />
      </div>
    </div>
  )