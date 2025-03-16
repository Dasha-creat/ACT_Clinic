import { star } from "../../shared/assets";
import "./Stars.css"

export function Stars({count, size}) {
    return (
        <div className={`stars--${size}`}>
            {[...Array(count)].map((_, index) => (
                <img key={index} src={star} alt="star" className="stars__icon" />
            ))}
        </div>
    )
}