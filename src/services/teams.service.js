import Axios from "./api.service";

const getTeamData = async (page) => {
	try {
		const response = await Axios.get(`/team/page/${page}`);
		return response.data;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des données d'équipe :",
			error
		);
		return [];
	}
};

export const team_service = { getTeamData };
