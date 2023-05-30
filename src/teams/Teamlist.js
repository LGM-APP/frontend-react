import React, { useEffect, useState } from "react";
import { team_service } from "../services/teams.service";

const TeamList = () => {
	const [teamData, setTeamData] = useState([]);

	useEffect(() => {
		const fetchTeamData = async () => {
			const response = await team_service.getTeamData(2); // Remplacez 1 par le numéro de page souhaité
			console.log(response);
			setTeamData(response);
		};

		fetchTeamData();
	}, []);

	return (
		<div className="container mx-auto">
			<h1 className="text-2xl font-bold mt-4 mb-4">Liste des équipes</h1>
			<table className="m-8 min-w-full bg-white border border-gray-300 shadow-sm rounded-lg">
				<thead>
					<tr>
						<th className="py-2 px-4 border-b">Nom</th>
					</tr>
				</thead>
				<tbody className="divide-y">
					{teamData.map((team) => (
						<tr key={team.id}>
							<td className="flex items-center gap-x-2 py-3 px-4">
								<div className="w-[10vh] flex items-center aspect-[4/3] object-contain mr-2">
									<img src={team.imageUrl} alt="serie logo" />
								</div>
								<div>
									<span className="text-gray-700 text-lg font-medium whitespace-nowrap">
										{team.name}
									</span>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TeamList;
