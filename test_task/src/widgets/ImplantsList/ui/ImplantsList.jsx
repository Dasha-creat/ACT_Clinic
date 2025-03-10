import { ImplantCard } from "../../../shared/ui/index"
import { IMPLANTS, IMPLANTS_TEXT } from "../../../shared/constants/index"
import "./ImplantsList.css"

export function ImplantsList() {
    return (
        <div className="implant-container">
            {IMPLANTS.map((implant) => (
                <ImplantCard
                key={implant.id}
                title_name={implant.name}
                country={implant.country}
                flag={implant.country.flag}
                card_text={IMPLANTS_TEXT.consultation}
                price_text={IMPLANTS_TEXT.installation}
                new_price={implant.new_price}
                old_price={implant.old_price}
                economy_text={`- ${implant.economy} ${IMPLANTS_TEXT.your_economy}`}
                />
            ))}
        </div>
    )
}