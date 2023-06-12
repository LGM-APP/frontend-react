import React, { useEffect } from "react";
import "./Clicu.css";

const Clicu = () => {
	const gameWidth = 770;
	const gameHeight = 770;
	const gameDuration = 30;
	let timeLeft = gameDuration;
	let score = 0;
	let timerId = null;

	useEffect(() => {
		const gameContainer = document.getElementById("game-container");

		function generateNewTargets() {
			if (timeLeft > 0) {
				const position = getRandomPosition();
				const target = createTarget(position);
				gameContainer.appendChild(target);
			}
		}

		function getRandomPosition() {
			const x = Math.floor(Math.random() * gameWidth);
			const y = Math.floor(Math.random() * gameHeight);
			return { x, y };
		}

		function createTarget(position) {
			const target = document.createElement("div");
			target.className = "target";
			target.style.left = `${position.x}px`;
			target.style.top = `${position.y}px`;

			target.addEventListener("click", () => {
				score += 300;
				target.remove();
				updateScore();
			});

			return target;
		}

		function updateScore() {
			const scoreElement = document.getElementById("score");
			scoreElement.textContent = `Score: ${score}`;
		}

		function updateTime() {
			const timeElement = document.getElementById("time");
			timeElement.textContent = `Time: ${timeLeft}s`;
		}

		function checkMissedTarget(event) {
			const clickedElement = event.target;

			if (clickedElement.className !== "target") {
				score -= 100;
				updateScore();
			}
		}

		function startGame() {
			score = 0;
			timeLeft = gameDuration;

			gameContainer.innerHTML = "";

			updateScore();
			updateTime();

			timerId = setInterval(() => {
				timeLeft--;
				updateTime();

				if (timeLeft === 0) {
					endGame();
				}
			}, 1000);

			const numSpawn = 10;
			const numEverySec = 2;

			for (let i = 0; i < numSpawn; i++) {
				generateNewTargets();
			}

			for (let i = 0; i < numEverySec; i++) {
				setInterval(generateNewTargets, 1000);
			}

			gameContainer.addEventListener("click", checkMissedTarget);
		}

		function endGame() {
			clearInterval(timerId);
			timerId = null;
			gameContainer.removeEventListener("click", checkMissedTarget);
			alert(`Game over! Your score is ${score}.`);
		}

		startGame();

		return () => {
			clearInterval(timerId);
			gameContainer.removeEventListener("click", checkMissedTarget);
		};
	}, []);

	return (
		<div className="grid justify-center items-center min-h-screen">
			<div className="text-lg font-semibold">
				<div id="score" className="game-info">
					Score: {score}
				</div>
				<div id="time" className="game-info">
					Time: {timeLeft}s
				</div>
				<div id="game-container" className="game-container"></div>
			</div>
		</div>
	);
};

export default Clicu;
