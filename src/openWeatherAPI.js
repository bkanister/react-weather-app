import axios from "axios";
import {setWeather} from "./redux/reducer";

export const getWeather = (lat, long) => (dispatch, getState) => {
    const metrics = getState().metric;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=366f4fce3fad6e08b35ee24a8d79a753&${metrics}`)
        .then(response => {
            const temperature = parseInt(response.data.main['temp'], 10);
            const feelsLikeTemp = parseInt(response.data.main['feels_like'], 10)
            const windSpeed = response.data.wind['speed']
            const main = response.data['weather'][0]['main']
            const weatherDescription = response.data['weather'][0]['description']
            const humidity = response.data.main['humidity']
            const pressure = response.data.main['pressure']
            dispatch(setWeather(temperature, feelsLikeTemp, windSpeed, main, weatherDescription, humidity, pressure))
        })
}