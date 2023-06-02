import React, { useState, useEffect } from "react";
import Pagination from "../../pagination/Pagination";
import { matchs_service } from "../../../services/matchs.service";
import Matchcard from "./components/matchcard/Matchcard";
import Loader from "../../loader/Loader";

const Betlist = () => {

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


	if (matches.length === 0) {
		return (
			<div className="p-4 bg-white border border-cyan-950 rounded">
				<h2 className="text-lg font-semibold">Matchs à venir</h2>
				<Loader />
			</div>
		);
	}
	return (
		<div className="grid gap-y-4 p-4 bg-white border border-cyan-950 rounded">
			<h2 className="text-lg font-semibold">Matchs à venir</h2>
			{matches.map((match, index) => (
				<Matchcard match={match} index={index} />
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
