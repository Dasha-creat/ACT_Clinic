import { useState } from "react";
import { Stars } from "../Stars";
import { arrow_forward } from "../../shared/assets";
import "./Review.css";

export function ReviewCard({ userName, date, title, text }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev)
    }

    return (
        <div className="review-card">
            <div className="review-card__header">
                <div className="review-card__rating">
                    <div className="review-card__icon-content">
                        <div className="review-card__icon">
                            <Stars count={5} size="small" />
                        </div>
                        <p className="review-card__rating-number">5.0</p>
                    </div>
                    <p className="review-card__date">{date}</p>
                </div>

                <p className="review-card__user">{userName}</p>
            </div>

            <div className="review-card__text-content">
                <p className="review-card__title">{title}</p>

                <p className="review-card__text">{text}</p>

                {!isExpanded && <div className="review-card__gradient" />}
            </div>

                <button className="review-card__button" onClick={toggleExpand}>
                    <div className="review-card__button-content">
                        <p className="review-card__button-text">
                            {isExpanded ? "Свернуть отзыв" : "Развернуть отзыв"}
                        </p>

                        <img src={arrow_forward} alt="arrow-forward" className="review-card__button-icon" />
                    </div>
                </button>
        </div>
    )
}
