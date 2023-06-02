import Axios from "./api.service";

const getAllMatchs = async (page) => {
	try {
		const response = await Axios.get(`/matchs/${page}`);
		return response.data;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des données d'équipe :",
			error
		);
		return { matchs: [], totalPages: 0 };
	}
};

const getMatchsByTeamId = async (id) => {
	try {
		const response = await Axios.get(`/matchs/team/${id}`);
		return response.data;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des données d'équipe :",
			error
		);
		return [];
	}
};

const getMatchsByTournamentId = async (id) => {
	try {
		const response = await Axios.get(`/matchs/tournament/${id}`);
		return response.data;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des données d'équipe :",
			error
		);
		return [];
	}
};

export const matchs_service = { getAllMatchs, getMatchsByTeamId, getMatchsByTournamentId };

