import React from "react";
import { Link } from "react-router-dom";

const ComplistTable = ({ series }) => {
	return (
		<div className="m-8 bg-gray-50 w-3/4 mx-auto border border-black shadow-sm rounded-lg overflow-x-auto">
			<table className="w-full table-fixed text-sm text-left">
				<thead className="text-gray-600 text-lg font-medium uppercase border-b">
					<tr>
						<th className="py-2 px-4 w-1/4">Compétition</th>
						<th className="py-2 px-4 w-1/4">Split</th>
						<th className="py-2 px-4 w-1/4">Début</th>
						<th className="py-2 px-4 w-1/4">Fin</th>
					</tr>
				</thead>
				<tbody className="text-gray-600 divide-y space-y-2">
					{series.map((serie) => (
						<tr key={serie.id}>
							<td className="flex items-center gap-x-2 py-2 px-4">
								<Link to={`/competition/${serie.id}`} className="flex justify-center items-center">
									<div className="w-16 h-16 flex items-center justify-center border-pink-400 mr-2">
										<img
											className="w-16 h-16 object-contain"
											src={serie.leagueId.imageUrl}
											alt="logo de la série"
										/>
									</div>
									<div className="pl-4">
										<span className="block text-gray-700 text-xs font-medium whitespace-nowrap">
											{serie.leagueId.name}
										</span>
										<span className="block text-gray-500 text-xs font-medium whitespace-nowrap">
											{serie.leagueId.videoGame.name}
										</span>
									</div>
								</Link>
							</td>
							<td className="py-2 px-4 whitespace-nowrap">
								{serie.fullName}
							</td>
							<td className="py-2 px-4 whitespace-nowrap">
								{serie.beginAt}
							</td>
							<td className="py-2 px-4 whitespace-nowrap">
								{serie.endAt}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ComplistTable;
