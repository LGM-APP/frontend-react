import axios from "axios";
import { auth_service } from "./auth.service";

const Axios = axios.create({
	baseURL: "http://16.171.46.30:8080/",
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
