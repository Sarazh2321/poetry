import http from "./httpService";
import config from "./config.json";

export const getSinglePoem = poemId => {
    return http.get(`${config.ganjoor}/api/ganjoor/poem/${poemId}`);
}