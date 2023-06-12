import React, { useState, useEffect } from "react";
import "./Memoryu.css";
import ekkopic from "./ekko.jpg";
import sennapic from "./senna.jpg";
import ezrealpic from "./ezreal.jpg";
import xerathpic from "./xerath.jpg";
import poppypic from "./poppy.jpg";
import taricpic from "./taric.jpg";
import tristanapic from "./tristana.jpg";
import taliyahpic from "./taliyah.jpg";

function Memoryu() {
	const initialTabJeu = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	];

	const [tabJeu, setTabJeu] = useState(initialTabJeu);
	const [tabRes, setTabRes] = useState(generateTab());
	const [oldClic, setOldClic] = useState([]);
	const [nbClic, setNbClic] = useState(0);
	const [ready, setReady] = useState(true);
	const [timer, setTimer] = useState(45);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [won, setWon] = useState(false);

	useEffect(() => {
		const timerInterval = setInterval(() => {
			setTimer((oldTimer) => {
				if (oldTimer === 0) {
					clearInterval(timerInterval);
					setGameOver(true);
					setReady(false);
					return 0;
				}
				return oldTimer - 1;
			});
		}, 1000);
		return () => clearInterval(timerInterval);
	}, []);

	function generateTab() {
		var tab = [];
		var pos = [0, 0, 0, 0, 0, 0, 0, 0];

		for (var i = 0; i < 4; i++) {
			var row = [];
			for (var j = 0; j < 4; j++) {
				var end = false;
				while (!end) {
					var random = Math.floor(Math.random() * 8);
					if (pos[random] < 2) {
						row.push(random + 1);
						pos[random]++;
						end = true;
					}
				}
			}
			tab.push(row);
		}
		return tab;
	}

	function getImage(valeur) {
		switch (valeur) {
			case 1:
				return ekkopic;
			case 2:
				return sennapic;
			case 3:
				return ezrealpic;
			case 4:
				return xerathpic;
			case 5:
				return poppypic;
			case 6:
				return taricpic;
			case 7:
				return tristanapic;
			case 8:
				return taliyahpic;
			default:
				return "";
		}
	}

	function restartGame() {
		setTabJeu(initialTabJeu);
		setTabRes(generateTab());
		setOldClic([]);
		setNbClic(0);
		setReady(true);
		setScore(0);
		setTimer(45);
		setGameOver(false);
		setWon(false);
	}

	function check(row, col) {
		if (ready) {
			setNbClic((oldNbClic) => oldNbClic + 1);

			let newTab = [...tabJeu];
			newTab[row][col] = tabRes[row][col];
			setTabJeu(newTab);

			if (nbClic > 0) {
				setReady(false);
				setTimeout(() => {
					if (tabJeu[row][col] !== tabRes[oldClic[0]][oldClic[1]]) {
						newTab[row][col] = 0;
						newTab[oldClic[0]][oldClic[1]] = 0;
					} else {
						setScore((oldScore) => oldScore + 1);
						if (score === 8) {
							setWon(true);
							setTimer(0);
						}
					}
					setTabJeu(newTab);
					setReady(true);
					setNbClic(0);
					setOldClic([row, col]);
				}, 300);
			} else {
				setOldClic([row, col]);
			}
		}
	}

	return (
		<div className="Memoryu mt-12">
			<div>Temps restant : {timer}</div>
			<div className="pb-2">Score : {score}</div>
			{gameOver && <div className="pb-2 text-red-700">Game Over ! Vous avez perdu ! </div>}
			{won && (
				<div>
					Bien Joué ! Vous avez gagné !<br />
					Vous avez obtenus 50 pts de paris
				</div>
			)}
			<div className="grid">
				{tabJeu.map((row, i) => (
					<div key={i}>
						{row.map((cell, j) =>
							cell === 0 ? (
								<button
									className="card btn btn-outline-success m-2 btn-lg border border-cyan-950 rounded-md"
									onClick={() => check(i, j)}
									key={j}
								>
									Show
								</button>
							) : (
								<img
									src={getImage(cell)}
									className="m-2 border border-cyan-950 rounded-md"
									key={j}
									alt="pic"
								/>
							)
						)}
					</div>
				))}
			</div>
			{(gameOver || won) && (
				<button className="bg-cyan-950 text-white hover:bg-cyan-900 rounded-full p-2 mt-2" onClick={restartGame}>Recommencer</button>
			)}
		</div>
	);
}

export default Memoryu;
