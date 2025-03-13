import { useState } from "react"
import "./PhoneInput.css"

export function PhoneInput({color, border}) {
  const [phone, setPhone] = useState("")
  const back_color = color === "grey" ? "grey" : "white"
  const radius = border === "big" ? "big" : "tiny"

  const formatPhoneNumber = (value) => {
    const symbols = value.replace(/\D/g, "")

    const limitedsymbols = symbols.substring(0, 11)

    let formattedPhone = "+7"

    if (limitedsymbols.length > 1) {
      formattedPhone += ` (${limitedsymbols.substring(1, 4)}`
    }
    if (limitedsymbols.length >= 5) {
      formattedPhone += `) ${limitedsymbols.substring(4, 7)}`
    }
    if (limitedsymbols.length >= 8) {
      formattedPhone += `-${limitedsymbols.substring(7, 9)}`
    }
    if (limitedsymbols.length >= 10) {
      formattedPhone += `-${limitedsymbols.substring(9, 11)}`
    }

    return formattedPhone
  }

  const handleChange = (e) => {
    const input = e.target.value
    const formatted = formatPhoneNumber(input)
    setPhone(formatted)
  }

  return (
    <div className={`container-phone-input ${back_color} ${radius}`}>
      <input
        id="phone"
        type="text"
        value={phone}
        onChange={handleChange}
        placeholder="+7 (___) ___-__-__"
        className="phone-input font-black"
      />
    </div>
  )
}
