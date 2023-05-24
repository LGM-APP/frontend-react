import React, { useState } from "react";
import { truncateText } from "../../utils/utils";
import Pagination from "../pagination/Pagination";
import Loader from "../loader/Loader";

const ITEMS_PER_PAGE = 5;

const ComplistTable = ({ tableItems }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(tableItems.length / ITEMS_PER_PAGE);

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;

	const currentItems = tableItems.slice(startIndex, endIndex);

	if (tableItems.length === 0) {
		return (
			<div className="mt-8 w-full bg-gray-50 shadow-sm rounded-lg overflow-x-auto">
				<table className="w-full table-auto text-lg text-left">
					<thead className="text-gray-600 font-medium border-b">
						<tr>
							<th className="py-3 px-6">Compétition</th>
							<th className="py-3 px-6">Split</th>
							<th className="py-3 px-6">Format</th>
							<th className="py-3 px-6">Statut</th>
						</tr>
					</thead>
					<tbody className="text-gray-600 divide-y">
						<tr>
							<td className="pb-2" colSpan="4">
								<Loader />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}

	return (
		<div className="mt-8 bg-gray-50 w-screen border border-black shadow-sm rounded-lg overflow-x-auto">
			<table className="w-full table-fixed text-sm text-left">
				<thead className="text-gray-600 font-medium border-b">
					<tr>
						<th className="py-3 px-6 w-1/4">Compétition</th>
						<th className="py-3 px-6 w-1/3">Split</th>
						<th className="py-3 px-6 w-1/6">Format</th>
						<th className="py-3 px-6 w-1/5">Statut</th>
					</tr>
				</thead>
				<tbody className="text-gray-600 divide-y space-y-4">
					{currentItems.map((item, idx) => (
						<tr key={idx}>
							<td className="flex items-center gap-x-2 py-3 px-4">
								<div className="w-[10vh] flex items-center aspect-[4/3] object-contain border-pink-400 mr-2">
									<img
										src={item["serie"]["leagueId"]["imageUrl"]}
										alt="serie logo"
									/>
								</div>
								<div>
									<span className="block text-gray-700 text-sm font-medium whitespace-nowrap">
										{truncateText(
											item["serie"]["leagueId"]["name"],
											20
										)}
									</span>
								</div>
							</td>
							<td className="px-8 py-4 whitespace-nowrap">
								{item["serie"]["fullName"]}
							</td>
							<td className="px-8 py-4 whitespace-nowrap">
								{truncateText(item.name, 20)}
							</td>
							<td className="px-8 py-4 whitespace-nowrap">
								{truncateText(item["winner"]["name"], 25)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={setCurrentPage}
			/>
		</div>
	);
};

export default ComplistTable;
