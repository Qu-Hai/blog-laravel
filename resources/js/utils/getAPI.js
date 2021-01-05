import axios from "axios";
import * as Config from "../constants/Config";

export default async function getAPI(endpoint, method) {
    return await axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`
    }).catch(err => {
        console.log(err);
    });
}
