import axios from "axios";
import { auth_service } from "./auth.service";

const Axios = axios.create({
	baseURL: "http://13.50.130.143:8080",
});

Axios.interceptors.request.use(
	(config) => {
		const token = auth_service.get_token();

		if (config.headers.requiresAuth) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default Axios;
