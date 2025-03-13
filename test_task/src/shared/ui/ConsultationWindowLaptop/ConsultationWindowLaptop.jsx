import "./ConsultationWindowLaptop.css"
import { CONSULTATION_TEXT, CONSULTATION_LIST } from "../../constants/index"
import { ConsultationAgreement, PhoneInput } from "../index"
import { check_circle_orange, doctor, exit} from "../../assets/index"

export function ConsultationWindowLaptop({onClose}) {
    return (
        <div className="consultation-window">
            <div className="consultation-window-content">
                <p className="font600-52 font-black line-heigth-120">{CONSULTATION_TEXT.title.laptop}</p>

                <div className="take-consultation-block">
                    <div className="consultation-advantages">
                        <p className="font500-24-mon font-black line-heigth-110">{CONSULTATION_TEXT.subtitile.laptop}</p>

                        <div className="consultation-advantages-list">
                            {CONSULTATION_LIST.map((item) => (
                                <div key={item.id} className="consultation-advantages-item" >
                                    <img src={check_circle_orange} alt="check-orange-circle" />
                                                
                                    <p className="font300-20 font-black line-height-130">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="consultation-booking">
                        <div className="consultation-phone-block">
                            <p className="font500-16-mon font-gray line-heigth-110">{CONSULTATION_TEXT.phone_titile.laptop}</p>

                            <PhoneInput color="white" border="big" />
                        </div>

                        <ConsultationAgreement text={CONSULTATION_TEXT.phone_subtitle.laptop} />
                    </div>
                </div>
            </div>

            <img src={doctor} alt="doctor" className="doctor" />

            <div className="circles">
                <button className="exit-button" onClick={onClose}><img src={exit} alt="exit" className="exit" /></button>

                <div className="main-circle" />

                <div className="middle-circle" />

                <div className="last-circle" />
            </div>
        </div>
    )
}