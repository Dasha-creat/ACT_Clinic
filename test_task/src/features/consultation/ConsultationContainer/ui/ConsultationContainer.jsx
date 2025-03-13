import { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { ConsultationWindowPhone, ConsultationWindowLaptop } from "../../../../shared/ui"
import { HEADER_TEXT } from "../../../../shared/constants"
import "./ConsultationContainer.css"

export function ConsultationContainer({buttonType}) {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000)

    useEffect(() => {
        const resize = () => {
            setIsMobile(window.innerWidth <= 1000)
        }

        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const toggleWindow = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {buttonType === "container" ? (
                    <button className="booking-button" onClick={toggleWindow}>
                        <p className="font500-20 font-white">{HEADER_TEXT.sign_up}</p>

                        <p className="font300-20 font-white">{HEADER_TEXT.take_prize}</p>
                    </button>
            ) : (
                    <button className="booking-button-card" onClick={toggleWindow}>
                        <p className="font700-20 font-white">{HEADER_TEXT.sign_up}</p>

                        <p className="font300-prize font-white">{HEADER_TEXT.take_prize}</p>
                    </button>
            )}

            {isOpen && ReactDOM.createPortal(
                <div className="overlay">
                    {isMobile ? (
                        <ConsultationWindowPhone onClose={toggleWindow} />
                    ) : (
                        <ConsultationWindowLaptop onClose={toggleWindow} />
                    )}
                </div>,
                document.body
            )}
        </div>
    )
}