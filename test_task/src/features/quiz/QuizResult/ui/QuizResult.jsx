import { PhoneInput } from "../../../../shared/ui/index";
import { QUIZ_RESULT_TEXT } from "../../../../shared/constants/index";
import "./QuizResult.css"

export function QuizResult() {
    return (
        <div className="result-container">

                <div className="result-text">
                    <p className="result-title font-black">{QUIZ_RESULT_TEXT.title.thank_you}</p>
                    <div className="phone-input-text">
                        <p className="result-subtitle font-gray">{QUIZ_RESULT_TEXT.subtitle.instruction}</p>

                        <PhoneInput />
                    </div>
                </div>

                <div className="button-prize-container">
                    <button className="next-button-prize font700-20 font-white">Получить подарок</button>
                    <p className="button-subtitle font-gray">{QUIZ_RESULT_TEXT.button.personal_data}</p>
                </div>

        </div>
    )
}