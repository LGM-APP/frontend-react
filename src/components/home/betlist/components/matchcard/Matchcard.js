import React from "react";
import { useContext } from "react";
import { BetContext } from "../../../../BetContext";

const Matchcard = ({ match, index }) => {
	const { bets, setBets, setTotalOdds } = useContext(BetContext);

	const handleAddBet = (id, team_id, team, odds) => {
        if (bets.some((bet) => (bet.id === id))) {
            return;
        }
		setBets((prevBets) => [...prevBets, { id, team_id, team, odds }]);
		setTotalOdds((prevOdds) => prevOdds * odds);
	};

	return (
		<div
			className="flex justify-center items-center border border-cyan-950 bg-slate-200 rounded p-2 pb-4"
			key={index}
		>
			<div className="text-center items-center border-yellow-700">
				<div className="text-lg font-bold uppercase">
					<p>
						{match.tournament && match.tournament.serie.leagueId.name}
						{" - "}
						{match.tournament && match.tournament.serie.fullName}
						{" : "}
						{match.tournament && match.tournament.name}
					</p>
					<p>{match.beginAt}</p>
				</div>

				<div className="grid grid-cols-3 gap-2 items-center">
					<div className="flex items-center justify-start pl-6 border-pink-600">
						<div className="w-[35%]">
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
					<div className="gap-[5vh] flex items-center justify-center">
						<p
							className="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-1 rounded text-center cursor-pointer"
							onClick={() =>
								handleAddBet(match.id,  match.home.id,match.home.name, match.homeOdd)
							}
						>
							Cote: {match.homeOdd}
						</p>
						<div className="flex-col items-center justify-center">
							<p className=" text-6xl font-bold pb-2">VS</p>
							<p className=" text-sm font-semibold uppercase">
								{match.matchType.replace("_", " ")}{" "}
								{match.numberOfGames}
							</p>
						</div>
						<p
							className="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-1 rounded text-center cursor-pointer"
							onClick={() =>
								handleAddBet(match.id, match.away.id ,match.away.name, match.awayOdd)
							}
						>
							Cote: {match.awayOdd}
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
	);
};

export default Matchcard;
