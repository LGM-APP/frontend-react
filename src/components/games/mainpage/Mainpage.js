import React from "react";
import { Link } from "react-router-dom";

import snakeImage from "./snake.png";
import cibleImage from "./cible.png";
import memoryImage from "./memory.png";
import quizuImage from "./quizu.png";

const Mainpage = () => {
	return (
		<div className="grid grid-cols-4 gap-4 min-h-screen m-36">
			<Link to="/game/snaku" className="col-span-1 m-12">
				<div className="group relative">
					<h1 className="text-3xl font-semibold uppercase text-center pb-2">Snake</h1>
					<img
						src={snakeImage}
						alt="Snake"
						className="w-full h-full rounded-lg object-cover transition duration-300 ease-in-out transform group-hover:opacity-0"
					/>
					<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-lg opacity-0 group-hover:opacity-100">
						<p>
							<br />- Utilisez les touches Z, Q, S, D (ou les flèches
							directionnelles) pour déplacer le serpent sur la carte.
							<br />- L'objectif est de manger le plus de pommes
							possible.
							<br />- Toucher un mur ou sa propre queue fait perdre la
							partie.
							<br />- Le joueur a 3 vies pour réussir à atteindre le
							score minimum.
							<br />- Atteignez un score minimum de 20 pommes pour
							pouvoir gagner des points de paris.
						</p>
					</div>
				</div>
			</Link>

			<Link to="/game/clicu" className="col-span-1 m-12">
				<div className="group relative">
					<h1 className="text-3xl font-semibold uppercase text-center pb-2">Tir à la cible</h1>
					<img
						src={cibleImage}
						alt="Tir à la cible"
						className="w-full h-auto rounded-lg object-cover transition duration-300 ease-in-out transform group-hover:opacity-0"
					/>
					<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-lg opacity-0 group-hover:opacity-100">
						<p>
							<br /> - Des cibles apparaîtront à différents endroits de
							l'écran.
							<br />- Cliquez rapidement sur les cibles pour les éliminer
							et marquer des points.
							<br />- Attention à ne pas cliquer à côté des cibles, cela
							vous fera perdre des points.
							<br />- Cliquer sur une cible donne 300 points et louper
							une cible fait perdre 100 points.
							<br />- Si à la fin du timer (30 sec) vous avez plus de
							2000 de score, alors vous gagnez des points de paris.
						</p>
					</div>
				</div>
			</Link>

			<Link
				to="/game/memoryu"
				className="col-span-1 m-12"
			>
				<div className="group relative">
					<h1 className="text-3xl font-semibold uppercase text-center pb-2">Jeu de mémoire</h1>
					<img
						src={memoryImage}
						alt="Jeu de Mémoire"
						className="w-full h-auto rounded-lg object-cover transition duration-300 ease-in-out transform group-hover:opacity-0"
					/>
					<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-lg opacity-0 group-hover:opacity-100">
						<p>
							<br />- Vous avez un plateau de 16 cartes faces cachées (8
							paires).
							<br />- Retournez les cartes en cliquant dessus, vous ne
							pouvez retourner que 2 cartes en même temps.
							<br />- Si les 2 cartes retournées ne sont pas identiques,
							alors elles sont retournées à nouveau.
							<br />- Chaque paire trouvée vous rapportera 1.
							<br />- Vous devez trouver toutes les paires
							correspondantes et donc avoir 8 de score en moins de 45
							secondes pour gagner des points de paris.
						</p>
					</div>
				</div>
			</Link>

			<Link to="/game/quizu" className="col-span-1 m-12">
				<div className="group relative">
					<h1 className="text-3xl font-semibold uppercase text-center pb-2">Quiz</h1>
					<img
						src={quizuImage}
						alt="Quiz"
						className="w-full h-auto rounded-lg object-cover transition duration-300 ease-in-out transform group-hover:opacity-0"
					/>
					<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-lg opacity-0 group-hover:opacity-100">
						<p>
							<br />- Il y a 10 questions différentes qui ont comme sujet
							3 jeux : Valorant, CS:GO et League of Legends.
							<br />- Lisez attentivement chaque question et choisissez
							la réponse qui vous semble correcte.
							<br />- Si vous répondez juste à une question, vous obtenez
							1 point.
							<br />- Après avoir répondu à toutes les questions,
							soumettez vos réponses pour voir votre score.
							<br />- Vous devez obtenir un score minimum de 6/10 pour
							gagner des points de paris.
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Mainpage;
