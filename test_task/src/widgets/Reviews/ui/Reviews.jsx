import { ReviewSlider } from "../../../shared/ui/index";
import { REVIEWS_TEXT } from "../../../shared/constants";
import "./Reviews.css";
import { Stars } from "../../../entities/Stars";

export function Reviews() {
    return (
        <div className="reviews">
            <div className="reviews__text">
                <p className="reviews__text-first-part">{REVIEWS_TEXT.title_first_part}</p>
                <p className="reviews__text-second-part">{REVIEWS_TEXT.title_second_part}</p>
            </div>

            <div className="reviews__companies">
                {REVIEWS_TEXT.companies.map((item) => (
                    <div key={item.icon} className="reviews__company">
                        <div className="reviews__company-icon">
                            <img src={item.icon} alt="icon-company" className="reviews__company-image " />

                            <div className="reviews__company-text"> 
                                <div className="reviews__company-stars-wrapper">
                                    <Stars count={5} size="large" />
                                </div>

                                <p className="reviews__company-rating">{item.raiting}</p>
                            </div>
                        </div>

                        <div className="reviews__company-stars">
                            <div className="reviews__company-svg">
                                <Stars count={5} size="large" />
                            </div>
                            
                            <p className="reviews__company-based-on">{item.based_on}</p>
                        </div>
                    </div>
                ))}
            </div>

            <ReviewSlider reviews={REVIEWS_TEXT.reviews} />
        </div>
    )
}
