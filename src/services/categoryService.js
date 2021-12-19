import http from "./httpService";
import config from "./config.json";

export const getCatPoems = catId => {
    return http.get(`${config.ganjoor}/api/ganjoor/cat/${catId}`);
}