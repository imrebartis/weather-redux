import axios from 'axios';

const API_KEY = "b069ae3de9b1b1cf9da2edbcfac5a0cf";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},fi`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}