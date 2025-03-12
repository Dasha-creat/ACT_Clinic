import "./InfoCard.css"
import { HEADER_TEXT, INFO_CARD_TEXT } from "../../../../shared/constants/index"
import { white_heart, gray_heart, prize } from "../../../../shared/assets/index"

export function InfoCard() {
    return (
        <div className="info-card-contetnt">
            <img src={gray_heart} alt="gray-heart" className="gray-heart" />
            <img src={white_heart} alt="white-heart" className="white-heart" />
            <img src={prize} alt="prize-heart" className="prize-heart" />


            <span className="implants-quantity">
                <p className="font500-32 font-black line-heigth-110">{INFO_CARD_TEXT.title_first}</p>
                <p className="font700-48 font-green line-heigth-120">{INFO_CARD_TEXT.quantity}</p>
                <p className="font500-32 font-black line-heigth-110">{INFO_CARD_TEXT.title_second}</p>
            </span>

            <div className="button-content">
                <button className="booking-button-card">
                    <p className="font700-20 font-white">{HEADER_TEXT.sign_up}</p>
                    <p className="font300-prize font-white">{HEADER_TEXT.take_prize}</p>
                </button>
            </div>

            </div>
    )
}