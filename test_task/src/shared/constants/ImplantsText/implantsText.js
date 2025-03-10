import { korea_flag, switzerland_flag } from "../../assets/index"

export const IMPLANTS = [
    {
        id: "osstem",
        name: "Osstem",
        country: {
            name: "Южная Корея",
            flag: korea_flag
        },
        old_price: "24 800 ₽",
        new_price: "15 000 ₽",
        economy: "9 800 ₽"
    },
    {
        id: "implantium",
        name: "Implantium",
        country: {
            name: "Южная Корея",
            flag: korea_flag
        },
        old_price: "40 500 ₽",
        new_price: "25 000 ₽",
        economy: "20 500 ₽"
    },
    {
        id: "nobel",
        name: "Nobel",
        country: {
            name: "Швейцария",
            flag: switzerland_flag
        },
        old_price: "73 000 ₽",
        new_price: "48 000 ₽",
        economy: "25 500 ₽"
    }
]

export const IMPLANTS_TEXT = {
    consultation: "Консультация врача бесплатно",
    installation: "Цена за 1 имплантат с установкой",
    your_economy: "Ваша экономия"
}