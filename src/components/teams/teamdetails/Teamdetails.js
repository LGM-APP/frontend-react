import React from "react";

const Teamdetails = () => {
	const players = [
		{ id: 1, name: "Joueur 1" },
		{ id: 2, name: "Joueur 2" },
		{ id: 3, name: "Joueur 3" },
		// Ajoutez les autres joueurs de l'équipe
	];

	const matches = [
		{ id: 1, date: "01/01/2023", opponent: "Opponent 1" },
		{ id: 2, date: "02/01/2023", opponent: "Opponent 2" },
		{ id: 3, date: "03/01/2023", opponent: "Opponent 3" },
		// Ajoutez les autres matchs de l'équipe
	];
	return (
		<div className="grid grid-cols-2 gap-4">
			<div className="p-4 bg-white">
				<div className="flex items-center justify-center mb-4">
					<img
						src="https://via.placeholder.com/150"
						alt="Logo de l'équipe"
						className="w-24 h-24"
					/>
				</div>
				<h2 className="text-lg font-bold mb-2">Liste des joueurs</h2>
				<ul className="list-disc ml-4">
					{players.map((player) => (
						<li key={player.id}>{player.name}</li>
					))}
				</ul>
			</div>
			<div className="p-4 bg-white">
				<h2 className="text-lg font-bold mb-2">Liste des matchs</h2>
				<table className="w-full">
					<thead>
						<tr>
							<th>Date</th>
							<th>Adversaire</th>
						</tr>
					</thead>
					<tbody>
						{matches.map((match) => (
							<tr key={match.id}>
								<td>{match.date}</td>
								<td>{match.opponent}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Teamdetails;
