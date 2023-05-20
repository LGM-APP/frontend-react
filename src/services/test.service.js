import Axios from "./api.service";

const fetch_test = () => {
    return Axios.get("/user/test");
}

export const test_services = {
    fetch_test
}