import { InfoCard } from "../../../features/experts/InfoCard"
import { EXPERTS_TEXT, EXPERTS } from "../../../shared/constants/index"
import { ExpertCard } from "../../../shared/ui/index"
import "./Experts.css"

export function Experts() {
    return (
        <div className="experts-info-block">
            <div className="experts-info-text">
                <p className="guarantee-text font-orange">{EXPERTS_TEXT.guarantee}</p>
                <span className="experts-area-text">
                    {EXPERTS_TEXT.experts}
                    <p className="extra-area-text"> и протезирования</p>
                </span>
            </div>

            <div className="experts-container">
                <InfoCard className="item" />

                {EXPERTS.map((person) => (
                    <ExpertCard 
                    name={person.name}
                    photo={person.photo}
                    experience={person.experiense}
                    role={person.role}
                    key={person.name}
                    className="item"
                    />
                ))}
            </div>
        </div>
    )
}