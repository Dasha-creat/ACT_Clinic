import { PromoPrize } from "../../../shared/ui/index"
import { gift, plus_black } from "../../../shared/assets/index"
import "./TextPromoPrizeBlock.css"

export function TextPromoPrizeBlock() {
    return (
        <div className="block-container">
            <div className="text-plus-container">
                <span className="font400-56 font-black text-plus">Индивидуальный план лечения</span>
                <img src={plus_black} alt="plus_black" className="black-plus" />
            </div>
            <PromoPrize svg={gift} name="nothing" />
        </div>
    )
}