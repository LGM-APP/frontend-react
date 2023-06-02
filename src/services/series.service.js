import Axios from "./api.service";

const getSerieByGame = (game) => {
  return Axios.get(`/series/${game}`);
};

const getTournamentBySerieId = (id) => {
  return Axios.get(`/tournaments/series/${id}`);
};

export const series_service = { getSerieByGame, getTournamentBySerieId };
