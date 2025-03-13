import { useState } from "react"
import "./NameInput.css"

export const NameInput = ({color, border}) => {
  const [name, setName] = useState("")
    const back_color = color === "grey" ? "grey" : "white"
    const radius = border === "big" ? "big" : "tiny"

  const handleChange = (e) => {
    let value = e.target.value
    
    if (value.length > 0) {
      value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    
    setName(value)
  }

  return (
    <div className={`container-name-input ${back_color} ${radius}`}>
        <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Иван"
            className="phone-input font-black"
        />
    </div>
  )
}