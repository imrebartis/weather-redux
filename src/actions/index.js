import axios from 'axios';

const API_KEY = "b069ae3de9b1b1cf9da2edbcfac5a0cf";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},fi`;
    // Ajax request:
    const request = axios.get(url);

    // console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        // stop the promise & wait for the ajax request to finish, then create a new action
        // & send it to the reducers:
        payload: request
    };
}