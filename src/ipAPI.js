import axios from "axios";
import {setInitialLocation} from "./redux/reducer";
import {getWeather} from "./openWeatherAPI";

export const getInitialLocation = () => dispatch => {
    axios.get('http://ipinfo.io/json?token=d4328e21271872')
        .then(async (response) => {
            const lat = await Number(response.data.loc.split(',')[0]).toFixed(2);
            const long = await Number(response.data.loc.split(',')[1]).toFixed(2);
            dispatch(setInitialLocation(lat, long, response.data.city));
            dispatch(getWeather(lat, long))
    })
}