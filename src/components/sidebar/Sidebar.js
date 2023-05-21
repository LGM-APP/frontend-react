import React, { useEffect, useState } from "react";
import { faChessRook, faGun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { series_service } from "../../services/series.service";
import Loader from "./loader/Loader";

const Sidebar = () => {
	const [loading, setLoading] = useState(true);
	const [games, setGames] = useState([]);
	const [activeGames, setActiveGames] = useState([]);

	const fetch_all_data = async () => {
		const games = [
			{
				name: "lol",
				display_name: "League of Legends",
				icon: faChessRook,
				series: [],
			},
			{
				name: "valorant",
				display_name: "Valorant",
				icon: faGun,
				series: [],
			},
		];

		const seriesPromises = games.map((game) =>
			series_service
				.getSerieByGame(game.name)
				.then((response) => {
					const data = response.data.slice(-5);
					game.series.push(data);
				})
				.catch((error) => {
					console.error(
						"Erreur lors de la récupération des séries:",
						error
					);
				})
		);

		await Promise.all(seriesPromises);
		setLoading(false);
		return games;
	};

	useEffect(() => {
		const fetchData = async () => {
			const games = await fetch_all_data();
			setGames(games);
		};

		fetchData();
	}, []);

	const handleButtonClick = (index) => {
		if (activeGames.includes(index)) {
			setActiveGames(activeGames.filter((gameIndex) => gameIndex !== index));
		} else {
			setActiveGames([...activeGames, index]);
		}
	};

	if (loading) {
		return (
			<div className="bg-white min-h-screen border border-cyan-950 sticky top-2 self-start p-4 mt-24 rounded">
				<h2 className="text-lg font-semibold pb-2">
					Sports et Compétitions
				</h2>
        <Loader />
			</div>
		);
	} else {
		return (
			<div className="bg-white min-h-screen border border-cyan-950 sticky top-2 self-start p-4 mt-24 rounded">
				<h2 className="text-lg font-semibold pb-2">
					Sports et Compétitions
				</h2>
				<ul>
					{games.map((game, index) => (
						<li className="py-1" key={index}>
							<a
								className="flex bg-slate-300 rounded-md shadow-sm items-center py-2 pl-1"
								href={"/" + game.display_name}
								onClick={(event) => {
									event.preventDefault();
									handleButtonClick(index);
								}}
							>
								<FontAwesomeIcon icon={game.icon} />
								<span className="pl-2 font-semibold">
									{game.display_name}
								</span>
							</a>
							{activeGames.includes(index) && (
								<ul className="flex-col p-2 font-semibold">
									{game.series[0].map((serie, index) => {
										return (
											<li
												className="border-b-2 border-cyan-950 hover:border-cyan-600 pt-2 pb-2"
												key={index}
											>
												<a className="pb-2" href="/">
													{serie["leagueId"]["name"] +
														" : " +
														serie["fullName"]}
												</a>
											</li>
										);
									})}
								</ul>
							)}
						</li>
					))}
				</ul>
			</div>
		);
	}
};

export default Sidebar;
