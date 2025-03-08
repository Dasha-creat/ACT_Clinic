import "./PromoPrize.css"
import { INFO_BLOCK_TEXT } from "../../../shared/constants/index"
import { x_ray } from "../../assets/index"

export function PromoPrize({svg, name}) {
    const className = name === "orange-prize" ? "picture-large" : "picture-small"

    return (
        <div className="prize-container">
            <div className="picture-container">
                <img src={svg} alt="prize" className="picture-large" />
            </div>

            <div className="filling">
                <img src={x_ray} alt="teeth" className="teeth" />
                <div className="text-promo">
                    <p className="font400-20-second font-black">{INFO_BLOCK_TEXT.offers.smile}</p>
                    <p className="font600-24-second font-orange">{INFO_BLOCK_TEXT.promo.prize}</p>
                </div>
            </div>
        </div>
    )
}