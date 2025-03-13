import { LinkList } from "../../../shared/ui/index"
import { logo } from "../../../shared/assets/index"
import { PHONE_NUMBERS, HEADER_TEXT } from "../../../shared/constants/index"
import { ConsultationContainer } from "../../../features/consultation/ConsultationContainer/index"
import "./Header.css"

export function Header() {
    return (
        <header>

            <LinkList deleteLast={false} className="burger" />
            <img className="logo-img" src={logo} alt="logo" />
            <div className="container">
                <div className="text-container">
                    <p className="font700-32 font-white">{PHONE_NUMBERS.first_number}</p>
                    <p className="font500-20 font-white lower-text">
                        <span className="working-circle" />
                        <span>
                            {HEADER_TEXT.working}
                            <span className="extra-text">, звоните</span>
                        </span>
                    </p>
                </div>

                <div className="button-container">
                    <ConsultationContainer buttonType="container" />
                </div>
            </div>
            
        </header>
    )
}   