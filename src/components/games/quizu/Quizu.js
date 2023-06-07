import React, { useState } from 'react';
import questionsData from './questionsData.json'; // Importez vos données de questions à partir d'un fichier JSON
import './Quizu.css';

const Question = ({ questionObj, onQuestionAnswered }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const onAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    onQuestionAnswered(answer);
  };

  const createAnswer = (answer) => {
    return (
      <button
        key={answer.text}
        className="answer"
        onClick={() => onAnswerClick(answer)}
      >
        {answer.text}
      </button>
    );
  };

  const { text, answers } = questionObj;

  return (
    <div className="question">
      <h2>{text}</h2>
      <div className="answers">
        {answers.map((answer) => createAnswer(answer))}
      </div>
    </div>
  );
};

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const displayQuestion = () => {
    return (
      <Question
        questionObj={questionsData[currentQuestionIndex]}
        onQuestionAnswered={handleQuestionAnswered}
      />
    );
  };

  const handleQuestionAnswered = (answer) => {
    if (answer.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }, 1000);
  };

  if (currentQuestionIndex === questionsData.length) {
    setTimeout(() => {
      alert(`Quiz Fini!\nTon score est de : ${score}/${questionsData.length} points`);
    }, 100);
    return null;
  }

  return (
    <div id="app-container">
      <div id="score-container">Score: {score}/{questionsData.length}</div>
      <div id="questions-container">{displayQuestion()}</div>
    </div>
  );
};

export default Quiz;