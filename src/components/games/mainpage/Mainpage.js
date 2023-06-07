import React from "react";
import "./Mainpage.css";
import { Link } from "react-router-dom";

const Mainpage = () => {
	return (
		<div className="container border-2 border-black flex justify-center items-center h-screen">
			<div className="game-grid grid grid-cols-2 gap-10 border-5 border-black">
				<Link
					className="game-card relative w-350 h-350 cursor-pointer overflow-hidden border-3 border-green-500 m-15"
					to="/game/snaku"
				>
					<div className="game-content absolute w-full h-full flex flex-col justify-center items-center z-1 transition-opacity">
						<h2 className="text-2xl font-bold text-center">SNAKE</h2>
						<img
							src="img-jeu/snake.jpg"
							alt="Snake"
							className="w-full h-91 object-cover"
						/>
					</div>
					<div className="game-overlay absolute w-90 h-90 bg-blue-200 p-5 opacity-0 flex flex-col justify-left items-center z-2 transition-opacity">
						<p className="text-xl text-black text-left">
							<span className="text-4xl block text-center mb-5">
								Snake :
							</span>
							- Utilisez les touches Z, Q, S, D (ou les flèches
							directionnelles) pour déplacer le serpent sur la carte.
							<br />
							- L'objectif est de manger le plus de pommes possible.
							<br />
							- Toucher un mur ou sa propre queue fait perdre la partie.
							<br />
							- Le joueur a 3 vies pour réussir à atteindre le score
							minimum.
							<br />- Atteignez un score minimum de 20 pommes pour
							pouvoir gagner des points de paris.
						</p>
					</div>
				</Link>

				<Link
					className="game-card relative w-350 h-350 cursor-pointer overflow-hidden border-3 border-green-500 m-15"
                    to="/game/clicu"
				>
					<div className="game-content absolute w-full h-full flex flex-col justify-center items-center z-1 transition-opacity">
						<h2 className="text-2xl font-bold text-center">
							Jeu de Tir à la Cible
						</h2>
						<img
							src="img-jeu/cible.jpg"
							alt="Tir à la cible"
							className="w-full h-91 object-cover"
						/>
					</div>
					<div className="game-overlay absolute w-90 h-90 bg-blue-200 p-5 opacity-0 flex flex-col justify-left items-center z-2 transition-opacity">
						<p className="text-xl text-black text-left">
							<span className="text-4xl block text-center mb-5">
								Tir à la cible :
							</span>
							- Des cibles apparaîtront à différents endroits de l'écran.
							<br />
							- Cliquez rapidement sur les cibles pour les éliminer et
							marquer des points.
							<br />
							- Attention à ne pas cliquer à côté des cibles, cela vous
							fera perdre des points.
							<br />
							- Cliquer sur une cible donne 300 points et louper une
							cible fait perdre 100 points.
							<br />- Si à la fin du timer (30 sec) vous avez plus de
							2000 de score, alors vous gagnez des points de paris.
						</p>
					</div>
				</Link>

				<div
					className="game-card relative w-350 h-350 cursor-pointer overflow-hidden border-3 border-green-500 m-15"
					onClick={() => (window.location.href = "memory/memory.html")}
				>
					<div className="game-content absolute w-full h-full flex flex-col justify-center items-center z-1 transition-opacity">
						<h2 className="text-2xl font-bold text-center">
							Jeu de Mémoire
						</h2>
						<img
							src="img-jeu/memory.png"
							alt="Jeu de Mémoire"
							className="w-full h-91 object-cover"
						/>
					</div>
					<div className="game-overlay absolute w-90 h-90 bg-blue-200 p-5 opacity-0 flex flex-col justify-left items-center z-2 transition-opacity">
						<p className="text-xl text-black text-left">
							<span className="text-4xl block text-center mb-5">
								Jeu de mémoire :
							</span>
							- Vous avez un plateau de 16 cartes faces cachées (8
							paires).
							<br />
							- Retournez les cartes en cliquant dessus, vous ne pouvez
							retourner que 2 cartes en même temps.
							<br />
							- Si les 2 cartes retournées ne sont pas identiques, alors
							elles sont retournées à nouveau.
							<br />
							- Chaque paire trouvée vous rapportera 1.
							<br />- Vous devez trouver toutes les paires
							correspondantes et donc avoir 8 de score en moins de 45
							secondes pour gagner des points de paris.
						</p>
					</div>
				</div>

				<Link
					className="game-card relative w-350 h-350 cursor-pointer overflow-hidden border-3 border-green-500 m-15"
					to="/game/quizu"
				>
					<div className="game-content absolute w-full h-full flex flex-col justify-center items-center z-1 transition-opacity">
						<h2 className="text-2xl font-bold text-center">QUIZZ</h2>
						<img
							src="img-jeu/quizu.jpg"
							alt="Quiz"
							className="w-full h-91 object-cover"
						/>
					</div>
					<div className="game-overlay absolute w-90 h-90 bg-blue-200 p-5 opacity-0 flex flex-col justify-left items-center z-2 transition-opacity">
						<p className="text-xl text-black text-left">
							<span className="text-4xl block text-center mb-5">
								Quiz :
							</span>
							- Il y a 10 questions différentes qui ont comme sujet 3
							jeux : Valorant, CS:GO et League of Legends.
							<br />
							- Lisez attentivement chaque question et choisissez la
							réponse qui vous semble correcte.
							<br />
							- Si vous répondez juste à une question, vous obtenez 1
							point.
							<br />
							- Après avoir répondu à toutes les questions, soumettez vos
							réponses pour voir votre score.
							<br />- Vous devez obtenir un score minimum de 6/10 pour
							gagner des points de paris.
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Mainpage;
