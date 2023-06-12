import React, { useState, useEffect } from "react";
import questionsData from "./questionsData.json";

const Quizu = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizEnd, setIsQuizEnd] = useState(false);

  const currentQuestion = questionsData[currentQuestionIndex];
  
  useEffect(() => {
    if (selectedAnswer) {
      if (selectedAnswer.isCorrect) setScore((prevScore) => prevScore + 1);

      if (currentQuestionIndex < questionsData.length - 1) {
        setTimeout(() => {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }, 1000); // Temps d'attente en millisecondes
      } else {
        setIsQuizEnd(true);
      }
      
      // Clear selected answer
      setTimeout(() => {
        setSelectedAnswer(null);
      }, 1000);
    }
  }, [selectedAnswer, currentQuestionIndex]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizEnd(false);
  };

  if (isQuizEnd) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="mb-4 text-2xl font-bold">
          {score >= 7
            ? `Félicitations ! Ton score est de ${score}/${questionsData.length} points.`
            : `Dommage ! Ton score est de ${score}/${questionsData.length} points.`}
        </h2>
        <button
          className="px-4 py-2 mt-4 text-white bg-cyan-950 rounded-full hover:bg-cyan-900"
          onClick={restartQuiz}
        >
          Recommencer
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-24 min-h-screen">
      <h2 className="mb-4 text-2xl font-bold">{`Score: ${score}/${questionsData.length}`}</h2>
      <div className="border-2 border-cyan-950 p-4 rounded">
        <h2 className="mb-4 text-xl font-bold">{currentQuestion.text}</h2>
        <div>
          {currentQuestion.answers.map((answer, index) => (
            <button
              key={index}
              className={`block w-full mb-4 p-4 rounded font-bold 
                ${selectedAnswer 
                  ? answer === selectedAnswer 
                    ? answer.isCorrect 
                      ? "bg-green-500 text-white" 
                      : "bg-red-500 text-white"
                    : answer.isCorrect
                      ? "bg-green-500 text-white" 
                      : "bg-blue-500 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-700"
              }`}
              onClick={() => handleAnswerClick(answer)}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizu;
