import React, { useEffect, useState } from "react";
import { bet_service } from "../../services/bet.service";
import { user_service } from "../../services/user.service";
import Loader from "../loader/Loader";

const Profilepage = () => {
	const [userData, setUserData] = useState(null);
	const [betList, setBetList] = useState([]);
	const [rankList, setrankList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userinfo = await user_service.getUserData();
				setUserData(userinfo);

				const betData = await bet_service.getBet(1);
				setBetList(betData.data);
				console.log(betData.data);

				const rankData = await user_service.getUsersRanking();
				setrankList(rankData);
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
		<div className="flex min-h-screen">
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
					<Loader />
				)}
			</div>
			<div className="w-1/2 bg-gray-100 p-4">
				<h2 className="text-2xl font-semibold mb-4">Liste des paris</h2>
				{betList.series && betList.series.length > 0 ? (
					<ul>
						{betList.series.map((bet) => (
							<li className="py-2" key={bet.id}>
								<p>
									<span className="font-semibold">Nom :</span>{" "}
									{bet.matchId.name}
								</p>
								<p>
									<span className="font-semibold">Mise :</span>{" "}
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
					<Loader />
				)}
			</div>
			<div className="w-1/2 bg-gray-200 p-4">
				<h2 className="text-2xl font-semibold mb-4">Classement joueurs</h2>
				{rankList && rankList.length > 0 ? (
					<ul>
						{rankList.map((rank) => (
							<li key={rank.id}>
								<p>
									<span className="font-semibold">Nom :</span>{" "}
									{rank.firstName} {rank.lastName}
								</p>
								<p>
									<span className="font-semibold">Points :</span>{" "}
									{rank.point}
								</p>
							</li>
						))}
					</ul>
				) : (
					<Loader />
				)}
			</div>
		</div>
	);
};

export default Profilepage;
