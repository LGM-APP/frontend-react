import Axios from "./api.service";

	const addFavoriteTeam = async (teamId) => {
		try {
			const response = await Axios.post("/favoritesTeam/add", [{ idTeam: teamId }], { headers: { requiresAuth: true } });
			return response.data;
		} catch (error) {
			console.error(
				"Erreur lors de la récupération des données utilisateur :",
				error
			);
			throw error;
		}
	};	

const deleteFavoriteTeam = (teamId) =>
	Axios.post("/favoritesTeam/delete", { idTeam: teamId }, { headers: { requiresAuth: true } });

const getFavoriteTeams = () =>
	Axios.get("/favoritesTeam/get", { headers: { requiresAuth: true } });


export const fav_service = { addFavoriteTeam, deleteFavoriteTeam, getFavoriteTeams };