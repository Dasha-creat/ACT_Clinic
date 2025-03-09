import { check_circle, clock, decline, fast_mark, jaw, question_mark } from "../../assets/index"

export const QUESTIONS = [
    {
        question: "Шаг 1. Какую челюсть нужно восстановить?",
        answers: [
            {text: "Верхнюю", icon: jaw ,transparency: "bottom" },
            {text: "Нижнюю", icon: jaw ,transparency: "top" },
            {text: "Обе", icon: jaw},
            {text: "Нужна консультация", icon: question_mark},
        ]
    },
    {
        question: "Шаг 2. Вы носите съёмные протезы?",
        answers: [
            {text: "Да, ношу", icon: jaw},
            {text: "Нет, не ношу", icon: decline},
        ]
    },
    {
        question: "Шаг 3. Хотите получить налоговый вычет 13%?",
        answers: [
            {text: "Да, хочу", icon: check_circle},
            {text: "Нет, не хочу", icon: decline},
            {text: "Пока не знаю", icon: question_mark},
        ]
    },
    {
        question: "Шаг 4. Когда планируете лечиться?",
        answers: [
            {text: "В течении 1–2 недель", icon: fast_mark},
            {text: "В течении месяца", icon: clock},
            {text: "Пока не знаю", icon: question_mark},
        ]
    }
]