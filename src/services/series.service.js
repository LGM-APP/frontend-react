import Axios from "./api.service";

const getSerieByGame = (game) => {
  return Axios.get(`/series/${game}`);
};

export const series_service = { getSerieByGame };
