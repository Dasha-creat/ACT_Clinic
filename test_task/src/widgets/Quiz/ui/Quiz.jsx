import { useState, useEffect } from "react";
import { QUESTIONS } from "../../../shared/constants/index";
import { fast_mark_orange } from "../../../shared/assets/index";
import "./Quiz.css";
import { ProgressBar } from "../../../features/quiz/ProgressBar/index";
import { QuizQuestion } from "../../../features/quiz/QuizQuestions/index";
import { QuizResultScreen } from "../../../features/quiz/QuizResultScreen/index";

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => setSelectedAnswer(0), [currentQuestionIndex]);

  const handleSelectAnswer = (index) => setSelectedAnswer(index);

  const handleNextQuestion = () => {
    if (currentQuestionIndex === QUESTIONS.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="quiz-container">

      <div className="quiz-top">
        <div className={`${quizCompleted ? "quiz-top-text-complete" : "quiz-top-text"}`}>
          <img src={fast_mark_orange} alt="fast-mark-orange" className="fast-mark-orange" />
          <span className="font300-20 font-black">Расчёт займёт не больше минуты</span>
        </div>
        <ProgressBar currentQuestionIndex={currentQuestionIndex} quizCompleted={quizCompleted} />
      </div>

      {quizCompleted ? (
        <QuizResultScreen />
      ) : (
        <QuizQuestion
          question={QUESTIONS[currentQuestionIndex]}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          onNext={handleNextQuestion}
        />
      )}
    </div>
  )
}