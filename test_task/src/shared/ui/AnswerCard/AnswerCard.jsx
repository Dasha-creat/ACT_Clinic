import "./AnswerCard.css"
import { minus, plus_orange } from "../../assets/index"
import { useState } from "react"

export function AnswerCard({question, number, answer}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="question-answer-container" onClick={toggleAnswer}>
            <div className="question-title">
                <div className="number-question">
                    <p className="font-question font-orange">{number}</p>

                    <p className="font-question font-black">{question}</p>
                </div>

                <img src={isOpen ? minus : plus_orange} alt="toggle-icon" className="toggle-icon" />
            </div>

            <div className={`answer-container ${isOpen ? "open" : ""}`}>
                {isOpen && <p className="font-answer font-black">{answer}</p>}
            </div>
        </div>
    )
}