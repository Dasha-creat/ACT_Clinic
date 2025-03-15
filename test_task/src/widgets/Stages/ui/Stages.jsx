import { STAGES, STAGES_TEXT } from "../../../shared/constants"
import { stages_plus } from "../../../shared/assets"
import { Stage } from "../../../entities/Stage"
import "./Stages.css"

export function Stages() {
    return (
        <div className="stages">
            <p className="stages__title">{STAGES_TEXT.title}</p>

            <div className="stages__content">
                <div className="stages__stage">
                    <Stage {...STAGES[0]} />
                </div>

                <img src={stages_plus} alt="stages-plus" className="stages__icon" />

                <div className="stages__stage">
                    <Stage {...STAGES[1]} />
                </div>
            </div>
        </div>
    )
}