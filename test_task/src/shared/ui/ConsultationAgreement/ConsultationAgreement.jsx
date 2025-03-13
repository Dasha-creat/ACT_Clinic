import { useState } from "react"
import "./ConsultationAgreement.css"

export function ConsultationAgreement({text}) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    const handleButtonClick = () => {
        if (isChecked) {
            console.log("Запись принята")
        } else {
            console.log("Согласитесь на обработку данных")
        }
    }

    return (
        <div className="button-agreement-block">
            <button 
                className={`get-consultation-button font600-20-mon font-white line-heigth-100`} 
                onClick={handleButtonClick}
            >
                Получить консультацию
            </button>

            <div className="user-agreement">
                <input 
                    type="checkbox" 
                    className="user-agreement-check" 
                    checked={isChecked} 
                    onChange={handleCheckboxChange} 
                />
                <p className="font400-16-mon font-gray line-heagth-130">
                    {text}
                </p>
            </div>
        </div>
    )
}
