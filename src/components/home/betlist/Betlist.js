import React, { useState, useEffect } from "react";
// import { BetContext } from "../../BetContext";
import Pagination from "../../pagination/Pagination";
import { matchs_service } from "../../../services/matchs.service";

const Betlist = () => {
	//   const { setBets, setTotalOdds } = useContext(BetContext);
	const [currentPage, setCurrentPage] = useState(1);
	const [matches, setMatches] = useState([]);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		const fetchMatchData = async () => {
			try {
				const data = await matchs_service.getAllMatchs(currentPage);
				setMatches(data.matchs);
				setTotalPages(data.totalPages);
			} catch (error) {
				console.error(error);
			}
		};

		fetchMatchData();
	}, [currentPage]);

	//   const handleAddBet = (team, odds) => {
	//     setBets((prevBets) => [...prevBets, { team, odds }]);
	//     setTotalOdds((prevOdds) => prevOdds + odds);
	//   };

	return (
		<div className="grid gap-y-4 p-4 bg-white border border-cyan-950 rounded">
			<h2 className="text-lg font-semibold">Matchs à venir</h2>
			{matches.map((match, index) => (
				<div
					className="flex justify-center items-center border border-cyan-950 bg-slate-200 rounded p-2 pb-4"
					key={index}
				>
					<div className="text-center items-center border-yellow-700">
						<div className="text-lg font-bold uppercase">
							<p>
								{match.tournament && match.tournament.serie.fullName}
							</p>
							<p>{match.beginAt}</p>
						</div>

						<div className="grid grid-cols-3 gap-2 items-center">
							<div className="flex items-center justify-start pl-6 border-pink-600">
								<div className="w-[40%]">
									<img
										className="w-full h-full"
										src={match.home && match.home.imageUrl}
										alt="Logo home team"
									/>
								</div>
								<p className="text-lg font-bold pl-6">
									{match.home && match.home.name}
								</p>
							</div>
							<div className="flex-row items-center justify-center">
								<p className=" text-6xl font-bold pb-2">VS</p>
								<p className=" text-sm font-semibold uppercase">
									{match.matchType.replace("_", " ")} {match.numberOfGames}
								</p>
							</div>
							<div className="flex items-center justify-end pr-6 border-green-600">
								<p className="text-lg font-bold pr-6">
									{match.away && match.away.name}
								</p>
								<div className="w-[40%]">
									<img
										className="w-full h-full"
										src={match.away && match.away.imageUrl}
										alt="Logo away team"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={setCurrentPage}
			/>
		</div>
	);
};

export default Betlist;
