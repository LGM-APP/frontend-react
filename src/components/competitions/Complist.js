import React from "react";
import ComplistTable from "./ComplistTable";
import Filter from "./Filter";
import { useEffect, useState } from "react";
import { comp_service } from "../../services/comp.service";

const Complist = () => {
	const [tableItems, setTableItems] = useState([]);

	useEffect(() => {
		const fetchTournaments = async () => {
			try {
				const games = ["valorant", "lol"];
				const data = await comp_service.getCompetitionsByGames(games);
				setTableItems(data);
				console.log(data);
			} catch (error) {
				console.error(
					"Une erreur s'est produite lors de la récupération des compétitions :",
					error
				);
			}
		};

		fetchTournaments();
	}, []);
	return (
		<div className="flex flex-col min-h-screen m-auto lg:w-[80%] xl:w-[70%] md:w-[91%] sm:w-full mt-6">
			<h2 className="text-gray-800 font-bold text-4xl">Compétitions</h2>
			<div className="flex justify-center px-4 pb-4 gap-x-[6vh] ">
				<ComplistTable tableItems={tableItems} />
				<Filter />
			</div>
		</div>
	);
};

export default Complist;
