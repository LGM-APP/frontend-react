import React, { useEffect, useState } from "react";
import { team_service } from "../../../services/teams.service";
import Pagination from "../../pagination/Pagination";
import Loader from "../../loader/Loader";
import { Link } from "react-router-dom";

const TeamList = () => {
	const [teamData, setTeamData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		const fetchTeamData = async () => {
			try {
				const { teams, totalPages } = await team_service.getAllTeamsData(
					currentPage
				);
				setTeamData(teams);
				setTotalPages(totalPages);
			} catch (error) {
				console.error(
					"Erreur lors de la récupération des données d'équipe :",
					error
				);
				setTeamData([]);
				setTotalPages(0);
			}
		};

		fetchTeamData();
	}, [currentPage]);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	if (teamData.length === 0) {
		return (
			<div className="min-w-min mx-auto">
				<h1 className="text-4xl font-bold pt-4 pb-4 pl-64">
					Liste des équipes
				</h1>
				<div className="flex justify-center">
					<table className="m-8 min-w-[50%] bg-white justify-center border-gray-300 shadow-sm rounded-lg">
						<tbody>
							<tr>
								<td>
									<Loader />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}

	return (
		<div className="min-w-min mx-auto">
			<h1 className="text-4xl font-bold pt-4 pb-4 pl-64">
				Liste des équipes
			</h1>
			<div className="flex justify-center">
				<table className="mt-8 min-w-[50%] bg-white justify-center shadow-sm rounded-lg">
					<tbody className="grid grid-cols-3 gap-5 p-8 divide-y">
						{teamData.map((team) => (
							<tr key={team.id}>
								<td className="flex gap-x-2 border-2 bg-slate-200 border-cyan-950 py-3 px-4 rounded">
									<Link
										to={`/team/${team.id}`}
										className="flex items-center"
									>
										<div className="max-w-[10vh] flex items-center aspect-[4/3] object-contain mr-2">
											<img src={team.imageUrl} alt="serie logo" />
										</div>
										<div>
											<span className="text-gray-700 text-lg font-medium whitespace-nowrap">
												{team.name}
											</span>
										</div>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default TeamList;
