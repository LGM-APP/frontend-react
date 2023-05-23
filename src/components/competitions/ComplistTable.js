import React from "react";

const ComplistTable = ({tableItems}) => {
	return (
		<div className="mt-8 w-full bg-gray-50 shadow-sm rounded-lg overflow-x-auto">
			<table className="w-full table-auto text-sm text-left">
				<thead className="text-gray-600 font-medium border-b">
					<tr>
						<th className="py-3 px-6">Compétition</th>
						<th className="py-3 px-6">Split</th>
						<th className="py-3 px-6">Format</th>
						<th className="py-3 px-6">Statut</th>
					</tr>
				</thead>
				<tbody className="text-gray-600 divide-y">
					{tableItems.map((item, idx) => (
						<tr key={idx}>
							<td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
								<img
									src={item.avatar}
									className="w-10 h-10 rounded-full"
									alt="avatar"
								/>
								<div>
									<span className="block text-gray-700 text-sm font-medium">
										{item.name}
									</span>
									<span className="block text-gray-700 text-xs">
										{item.email}
									</span>
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								{item.phone_nimber}
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								{item.position}
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								{item.salary}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ComplistTable;
