import http from "./httpService";
import config from "./config.json";

export const getPoets = () => {
    return http.get(`${config.ganjoor}/api/ganjoor/poets`);
}

export const getSinglePoet = poetId => {
    return http.get(`${config.ganjoor}/api/ganjoor/poet/${poetId}`);
}

export const getSinglePoetImage = imageUrl => {
    return http.get(`${config.ganjoor}${imageUrl}`);
}