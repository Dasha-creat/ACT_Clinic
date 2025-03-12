import "./ExpertCard.css"

export function ExpertCard({name, photo, experience, role}) {
    return (
        <div className="expert-card">
            <div>
                <img src={photo} alt="profile" className="person-photo" />
                <div className="experiense-info">
                    <p className="font-black line-heigth-130">Опыт работы:</p>
                    <p className="font-orange line-heigth-130">{experience}</p>
                </div>
            </div>

            <div className="person-subtitle">
                <p className="name-subtitle font-black line-heigth-110">{name}</p>
                <p className="font400-20 font-black line-heigth-130">{role}</p>
            </div>
        </div>
    )
}