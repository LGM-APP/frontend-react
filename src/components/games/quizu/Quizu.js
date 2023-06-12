import React, { useState, useEffect } from "react";
import questionsData from "./questionsData.json";
import { game_service } from "../../../services/game.service"; // Assurez-vous que ce chemin est correct

const Quizu = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [score, setScore] = useState(0);
	const [isQuizEnd, setIsQuizEnd] = useState(false);

	const currentQuestion = questionsData[currentQuestionIndex];

	const handleAnswerClick = (answer) => {
		setSelectedAnswer(answer);
		if (answer.isCorrect) setScore((prevScore) => prevScore + 1);

		setTimeout(() => {
			if (currentQuestionIndex < questionsData.length - 1) {
				setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
			} else {
				setIsQuizEnd(true);
				game_service
					.addPoints(30)
					.then(() => console.log("Points ajoutés"))
          .catch((err) => console.log(err));
			}
			setSelectedAnswer(null);
		}, 1000);
	};

	const restartQuiz = () => {
		setCurrentQuestionIndex(0);
		setScore(0);
		setIsQuizEnd(false);
	};

	// useEffect(() => {
	// 	const addPoint = async () => {
	// 		if (isQuizEnd && score >= 7) {
	// 			await game_service
	// 				.addPoints(30)
	// 				.then(() => console.log("Points ajoutés"))
	// 				.catch((err) => console.log(err));
	// 		}
	// 	};
	// 	addPoint();
	// }, [isQuizEnd, score]);

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
                ${
							selectedAnswer
								? answer === selectedAnswer
									? answer.isCorrect
										? "bg-green-700 text-white"
										: "bg-red-700 text-white"
									: answer.isCorrect
									? "bg-green-700 text-white"
									: "bg-cyan-950 text-white hover:bg-cyan-900"
								: "bg-cyan-950 text-white hover:bg-cyan-900"
						}`}
							onClick={() => handleAnswerClick(answer)}
							disabled={selectedAnswer ? true : false}
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
