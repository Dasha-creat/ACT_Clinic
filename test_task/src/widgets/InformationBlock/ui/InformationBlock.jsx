import { INFO_BLOCK_TEXT } from "../../../shared/constants/index"
import { info_tooth, plus, prize } from "../../../shared/assets/index"
import "./InformationBlock.css"
import { PromoPrize } from "../../../shared/ui/index"

export function InformationBlock() {
    return (
        <section className="main-container">
            <div className="main-text-container">
                <div className="font500-28 font-white info-title">{INFO_BLOCK_TEXT.technology.one_day_tooth}</div>

                <div className="guarantee-container">
                    <p className="font400-44 font-white">{INFO_BLOCK_TEXT.guarantee.subtitle}</p>
                    <p className="font500-60-uppercase font-white">{INFO_BLOCK_TEXT.guarantee.title}</p>
                </div>
            </div>

            <div className="ad-container">
                <img src={info_tooth} alt="info-tooth" className="info-tooth" />

                <div className="offer-container">
                    <p className="font300-24 font-white">{INFO_BLOCK_TEXT.offers.implant}</p>

                    <div className="price-container">
                        <p className="font600-24 font-white">{INFO_BLOCK_TEXT.pricing.price_start}</p>
                        <p className="font600-40 font-white">{INFO_BLOCK_TEXT.pricing.price_end}</p>
                    </div>
                </div>
            </div>

            <div className="consultation-promo-section">
                <button className="consultation-button">
                    <p className="font700-20 font-white consultation-button-text">{INFO_BLOCK_TEXT.button.consultation}</p>
                </button>

                <img src={plus} alt="plus" className="plus" />
                
                <PromoPrize svg={prize} name="orange-prize" className="prize-button" />
            </div>
        </section>
    )
}