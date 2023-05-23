import Axios from "./api.service";

const getCompetitionByGame = (game) => {
  return Axios.get(`/tournaments/${game}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Une erreur s'est produite lors de la récupération des compétitions :", error);
      throw error;
    });
};

export const comp_service = {
  getCompetitionByGame,
  getCompetitionsByGames: async (games) => {
    const promises = games.map(game => getCompetitionByGame(game));
    const results = await Promise.all(promises);
    return results.flat();
  }
};
