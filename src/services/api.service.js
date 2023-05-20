import axios from "axios";

const Axios = axios.create({
    baseURL: "http://16.16.4.174:8080/"
})

export default Axios;