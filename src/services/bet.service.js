import Axios from "./api.service";

const addBet = (bet) => {
	return Axios.post("/bet/add", bet);
};

const getBet = () => {
    return Axios.get("/bet/get");
};

export const bet_service = { addBet, getBet };