import React from "react";
import axios from 'axios';

const URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = 'd5f3f70b6a16c5fca7a209efbe544a0f';

export const fetchWeather = async(query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    })
    return data;
}