import Axios from "./api.service";

const getUserData = async () => {
	try {
		const response = await Axios.get("/user/get", { headers: { requiresAuth: true } });
		return response.data;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des données utilisateur :",
			error
		);
		throw error;
	}
};

export const user_service = { getUserData };
