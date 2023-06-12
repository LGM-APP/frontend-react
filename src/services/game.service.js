import Axios from "./api.service";

const addPoints = (point) =>
	Axios.post(`/game/addPoint/${point}`, { headers: { requiresAuth: true } });


export const game_service = { addPoints };