import "./ConsultationWindowPhone.css"
import { CONSULTATION_TEXT, EXPERTS } from "../../constants"
import { PhoneInput, NameInput, ConsultationAgreement } from "../index"
import { doctor, exit } from "../../assets"

export function ConsultationWindowPhone({onClose}) {
    const doctor_text = EXPERTS[0]

    return (
        <div className="r">
        <div className="consultation-window-phone">
            <div className="user-data-text-block">
                <div className="phone-consultation-text">
                    <p className="font600-24-mon font-black line-heigth-110">{CONSULTATION_TEXT.title.phone}</p>
                    
                    <p className="font400-20 font-black line-heigth-120">{CONSULTATION_TEXT.subtitile.phone}</p>
                </div>

                <div className="user-data-block">
                    <div className="inputs">
                        <div className="user-input">
                        <p className="font600-12 font-black line-heigth-130">Имя</p>

                            <NameInput color="grey" border="tiny" />
                        </div>

                        <div className="user-input">
                            <p className="font600-12 font-black line-heigth-130">Номер телефона</p>

                            <PhoneInput color="grey" border="tiny" />
                        </div>

                        <ConsultationAgreement text={CONSULTATION_TEXT.phone_subtitle.phone} />
                    </div>
                </div>
            </div>

            <div className="doctor-info">
                <div className="doctor-experience">
                    <p className="font500-24 font-white line-heagth-120">{`Стаж: ${doctor_text.experiense}`}</p>
                </div>

                <div>
                    <p className="font600-16-mon font-black line-height-110">{doctor_text.name}</p>

                    <p className="font400-14-mon font-black line-heaight-120">{doctor_text.role}</p>
                </div>
            </div>

            <img src={doctor} alt="doctor-phone" className="doctor-phone" />

            <button className="exit-button-phone" onClick={onClose}><img src={exit} alt="exit" className="exit" /></button>
            
            <div className="circles-phone">
            
                <div className="main-circle-phone" />
            
                <div className="middle-circle-phone" />
            
                <div className="last-circle-phone" />
            </div>
        </div>
        </div>
    )
}