import Axios from "./api.service";

const getAllTeamsData = async (page) => {
	try {
		const response = await Axios.get(`/team/page/${page}`);
		return response.data;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des données d'équipe :",
			error
		);
		return { teams: [], totalPages: 0 };
	}
};

const getPlayerByTeamId = async (id) => {
	try {
		const response = await Axios.get(`/player/${id}`);
		return response.data;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des données d'équipe :",
			error
		);
		return [];
	}
};

export const team_service = { getAllTeamsData, getPlayerByTeamId };
