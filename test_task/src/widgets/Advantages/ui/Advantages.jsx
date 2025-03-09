import { ADVANTAGES_TEXT } from "../../../shared/constants/index"
import { check_circle } from "../../../shared/assets"
import "./Advantages.css"

export function Advantages() {
    return (
        <>
        <div className="advantages-container">
            {ADVANTAGES_TEXT.map(({ text, id }) => (
                <div key={id} className="advantages-item-container">
                <img src={check_circle} alt="check_circle" className="check-circle" />
                <span className="font500-24 font-black">{text}</span>
                </div>
            ))}
        </div>
        </>
    )
}