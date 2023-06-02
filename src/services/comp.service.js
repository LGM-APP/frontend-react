import Axios from "./api.service";

const getAllCompData = async (page) => {
	try {
		const response = await Axios.get(`/series/all/${page}`);
		return response.data;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des données d'équipe :",
			error
		);
		return { comp: [], totalPages: 0 };
	}
};

export const comp_service = { getAllCompData };
