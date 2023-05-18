import axios from "axios";
import { URL } from "../constant/UrlConst"

const GetNots = () => {
    return axios.get(`${URL}notes`);
}

export default GetNots;
