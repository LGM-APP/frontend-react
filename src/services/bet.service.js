import Axios from "./api.service";

const addBet = (bet) => {
    const { matchID, betTeamID, amount } = bet;
    const url = `/bet/add?matchID=${matchID}&betTeamID=${betTeamID}&amount=${amount}`;
    return Axios.post(url, null, { headers: { requiresAuth: true } });
  };
 
const getBet = (page) => {
	return Axios.get(`/bet/get/${page}`, { headers: { requiresAuth: true } });
};

export const bet_service = { addBet, getBet };
