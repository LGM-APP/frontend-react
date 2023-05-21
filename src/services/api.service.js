import axios from "axios";

const Axios = axios.create({
    baseURL: "http://16.171.46.30:8080/"
})

export default Axios;