import React, { useEffect, useState } from "react";
import { bet_service } from "../../services/bet.service";
import { user_service } from "../../services/user.service";

const Profilepage = () => {
	const [userData, setUserData] = useState(null);
	const [betList, setBetList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userData = await user_service.getUserData();
				setUserData(userData);

				const betList = await bet_service.getBet(1);
				console.log(betList.data.series);
				setBetList(betList);
			} catch (error) {
				console.error(
					"Erreur lors de la récupération des données :",
					error
				);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="flex">
			<div className="w-1/2 bg-gray-200 p-4">
				<h2 className="text-2xl font-semibold mb-4">
					Informations utilisateur
				</h2>
				{userData ? (
					<div>
						<p>
							<span className="font-semibold">Nom :</span>{" "}
							{userData.firstName} {userData.lastName}
						</p>
						<p>
							<span className="font-semibold">Email :</span>{" "}
							{userData.email}
						</p>
						<p>
							<span className="font-semibold">Points :</span>{" "}
							{userData.point}
						</p>
					</div>
				) : (
					<p>Chargement des données utilisateur...</p>
				)}
			</div>
			<div className="w-1/2 bg-gray-100 p-4">
				<h2 className="text-2xl font-semibold mb-4">Liste des paris</h2>
				{betList.data.series.length > 0 ? (
					<ul>
						{betList.data.series.map((bet) => (
							<li key={bet.id}>
								<p>
									<span className="font-semibold">Match ID :</span>{" "}
									{bet.matchId}
								</p>
								<p>
									<span className="font-semibold">Bet Team ID :</span>{" "}
									{bet.betTeamId}
								</p>
								<p>
									<span className="font-semibold">Montant :</span>{" "}
									{bet.amount}
								</p>
								<p>
									<span className="font-semibold">Côte :</span>{" "}
									{bet.odd}
								</p>
							</li>
						))}
					</ul>
				) : (
					<p>Aucun pari trouvé.</p>
				)}
			</div>
		</div>
	);
};

export default Profilepage;