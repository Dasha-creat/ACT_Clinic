import "./ImplantCard.css"

export function ImplantCard({title_name, country, flag, card_text, price_text, new_price, old_price, economy_text}) {
    return (
        <div className="implant-card">
            <div className="implant-main-block">
                <div className="info-card">
                    <div className="name-card">
                        <div className="country-price">
                            <p className="font400-40 font-black">{title_name}</p>
                            <p className="font600-20 font-gray">{country.name}</p>
                        </div>
                        <img src={flag} alt="flag" className="flag" />
                    </div>

                    <span className="offer-card">
                        <p className="font500-24 font-white">{card_text}</p>
                    </span>

                </div>

                <div className="price-card">
                    <p className="font400-20 font-black price-text">{price_text}</p>

                    <div className="country-price">
                        <p className="font400-20 font-gray text-line">{old_price}</p>
                        <p className="font600-32 font-orange">{new_price}</p>
                    </div>
                </div>
            </div>

            <span className="economy-container">
                <p className="font500-24 font-orange">{economy_text}</p>
            </span>
        </div>
    )
}