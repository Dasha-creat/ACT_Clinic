import "./BeforeAfter.css"
import { BEFORE_AFTER, BEFORE_AFTER_TEXT } from "../../../shared/constants"
import { BeforeAfterSlider } from "./BeforeAfterSlider"

export function BeforeAfterBlock() {
    return (
        <div className="before-after-container">
            <div className="before-after-title">
                <p className="font500-24-second font-orange line-heigth-110">{BEFORE_AFTER_TEXT.subtitle}</p>

                <p className="before-after-title font-black line-heigth-120">{BEFORE_AFTER_TEXT.title}</p>
            </div>

            <div className="before-after-block">
                {BEFORE_AFTER.map((item) => (
                    <BeforeAfterSlider 
                    key={item.id}
                    beforeImage={item.difference.before}
                    afterImage={item.difference.after}
                    text={item.subtitle}
                    />
                ))}
            </div>
        </div>
    )
}