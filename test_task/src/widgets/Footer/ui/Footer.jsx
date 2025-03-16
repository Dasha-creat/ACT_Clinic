import { clinic_icon, footer_arrow } from "../../../shared/assets";
import { FOOTER_TEXT, HEADER_TEXT, PHONE_NUMBERS } from "../../../shared/constants";
import { LinkList } from "../../../shared/ui";
import "./Footer.css"

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <img src={clinic_icon} alt="clinic-icon" className="footer__icon" />
                    
                    <div  className="footer__link-list">
                        <LinkList deleteLast={true} />
                    </div>

                    <div className="footer__contact">
                        <p className="footer__phone">{PHONE_NUMBERS.first_number}</p>

                        <button className="footer__button">
                            <div className="footer__button-content">
                                <p className="footer__button-text">{HEADER_TEXT.sign_up}</p>
                                <img src={footer_arrow} alt="footer-arrow" className="footer__button-icon" />
                            </div>
                        </button>
                    </div>
            </div>

            <div  className="footer__link-list-second">
                <LinkList deleteLast={true} />
            </div>

            <div className="footer__info">
                <div className="footer__content">
                    <p className="footer__title">{FOOTER_TEXT.titles.adress}</p>
                    <p className="footer__text">{FOOTER_TEXT.adress}</p>
                </div>

                <div className="footer__content">
                    <p className="footer__title">{FOOTER_TEXT.titles.phone}</p>
                    <p className="footer__text">{PHONE_NUMBERS.second_number}</p>
                    <p className="footer__text">{PHONE_NUMBERS.third_number}</p>
                </div>

                <div className="footer__content">
                    <div className="footer__content-info">
                        <p className="footer__title">{FOOTER_TEXT.titles.inn}</p>
                        <p className="footer__text-legal">{FOOTER_TEXT.inn}</p>
                    </div>

                    <div className="footer__content-info">
                        <p className="footer__title">{FOOTER_TEXT.titles.ogrn}</p>
                        <p className="footer__text-legal">{FOOTER_TEXT.ogrn}</p>
                    </div>
                </div>

                <div className="footer__content">
                    <p className="footer__text-legal">{FOOTER_TEXT.copirait}</p>
                    <p className="footer__text-legal">{FOOTER_TEXT.license}</p>
                </div>
            </div>

            <button className="footer__button-second">
                <div className="footer__button-content">
                    <p className="footer__button-text">{HEADER_TEXT.sign_up}</p>
                    <img src={footer_arrow} alt="footer-arrow" className="footer__button-icon" />
                </div>
            </button>

            <p className="footer__alert">{FOOTER_TEXT.alert}</p>
        </footer>
    )
}