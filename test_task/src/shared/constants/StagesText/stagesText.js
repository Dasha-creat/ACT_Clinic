import { abutment, orthopedist, implantologist, implant, anesthesia, plug, crown, gum_former, acute } from "../../assets/index"

export const STAGES = [
    {
        id: 1,
        stage: "1 этап",
        stage_name: "Хирургический",
        work: "Работа имплантолога",
        items: [
            {
                name: "Имплант",
                photo: implant
            },
            {
                name: "Заглушка",
                photo: plug
            },
            {
                name: "Анастезия",
                photo: anesthesia
            }
        ],
        time: "20–50",
        doctor_photo: implantologist
    },
    {
        id: 2,
        stage: "2 этап",
        stage_name: "Ортопедический",
        work: "Работа ортопеда",
        items: [
            {
                name: "Коронка",
                photo: crown
            },
            {
                name: "Формирователь десны",
                photo: gum_former
            },
            {
                name: "Абатмент",
                photo: abutment
            }
        ],
        time: "40–90",
        doctor_photo: orthopedist
    }
]

export const STAGES_TEXT = {
    title: "Результат всего за 1 день",
    units: "мин",
    time_icon: acute
}