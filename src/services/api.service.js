import axios from "axios";

const Axios = axios.create({
    baseURL: "http://13.50.106.66:8080/"
})

export default Axios;