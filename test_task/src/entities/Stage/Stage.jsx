import { STAGES_TEXT } from "../../shared/constants"
import "./Stage.css"

export function Stage({ stage, stage_name, work, items, time, doctor_photo }) {
    return (
        <div className="stage">
            <div className="stage__header">
                <p className="stage__number">{stage}</p>
                <p className="stage__name">{stage_name}</p>
            </div>

            <div className="stage__content">
                <div className="stage__doctor">
                    <div className="stage__doctor-photo-wrapper">
                        <img className="stage__doctor-photo" src={doctor_photo} alt="doctor-photo" />
                    </div>

                    <p className="stage__doctor-work">{work}</p>
                </div>

                {items.map((thing, index) => (
                    <div key={index} className="stage__item">
                        <div className="stage__item-photo-wrapper">
                            <img className="stage__item-photo" src={thing.photo} alt="thing-photo" />
                        </div>

                        <p className="stage__item-name">{thing.name}</p>
                    </div>
                ))}

                <div className="stage__time">
                    <img className="stage__time-icon" src={STAGES_TEXT.time_icon} alt="acute" />

                    <p className="stage__time-value">{time}</p>

                    <p className="stage__time-units">{STAGES_TEXT.units}</p>
                </div>
            </div>
        </div>
    )
}
