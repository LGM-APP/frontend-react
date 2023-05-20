import Axios from "./api.service";

const save_token = (token) => {
    localStorage.setItem("auth_token", token);
}

const register = (credentials) => {
    return Axios.post("/user/register", credentials)
}

const login = (credentials) => {
    return Axios.post("/user/login", credentials);
}
const logout = () => {
    localStorage.removeItem("auth_token");
}

const is_logged = () => {
    const auth_token = localStorage.getItem("auth_token");
    return !!auth_token;
}


export const auth_service = {
    save_token, is_logged, logout, register, login
}