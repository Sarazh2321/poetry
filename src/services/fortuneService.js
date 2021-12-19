import config from "./config.json";
import http from "./httpService";

export const getFortune = () => {
    return http.get(`${config.ganjoor}/api/ganjoor/hafez/faal`);
}