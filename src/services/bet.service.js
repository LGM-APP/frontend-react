import Axios from "./api.service";

const addBet = (bet) => {
    const { matchID, betTeamID, amount } = bet;
    const url = `/bet/add?matchID=${matchID}&betTeamID=${betTeamID}&amount=${amount}`;
    return Axios.post(url, null, { headers: { requiresAuth: true } });
  };
 
const getBet = () => {
	return Axios.get("/bet/get", { headers: { requiresAuth: true } });
};

export const bet_service = { addBet, getBet };
