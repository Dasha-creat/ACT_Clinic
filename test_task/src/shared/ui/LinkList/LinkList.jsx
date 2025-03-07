import { useState } from "react"
import { LINKS } from "../../constants/index"
import { menu } from "../../assets/index"
import "./LinkList.css"

export const LinkList = ({ deleteLast }) => {
    const visibleLinks = deleteLast ? LINKS.slice(0, -1) : LINKS
    const [isOpen, setIsOpen] = useState(false)

    return (
    <>
        <nav className="navbar">
            {!deleteLast && (
                <button className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
                    <img src={menu} alt="menu" />
                </button>
            )}

            <ul className="link-list" >
                {visibleLinks.map((link) => (
                    <li key={link.name}>
                        <a key={link.url} className={`font-white ${deleteLast ? 'font400' : 'font500'}`}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </>
    )
}