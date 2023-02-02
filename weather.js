import axios from "axios";

const API =
  "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime";

export const getWeather = (lat, lon, timezone) => {
  return axios.get(API, {
    params: {
      latitude: lat,
      longitude: lon,
      timezone,
    },
  });
};
