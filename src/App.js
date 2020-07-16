import React, {useEffect} from 'react';
import MainHeader from "./MainHeader";
import DateAndLocation from "./DateAndLocation";
import WeatherInfo from "./WeatherInfo";
import './styles.scss'
import {convertTemperature, setLocation} from "./redux/reducer";
import {connect} from "react-redux";
import {getInitialLocation} from "./ipAPI";
import {getWeather} from "./openWeatherAPI";

const App = ({state, dispatch}) => {
    useEffect(() => {
        dispatch(getInitialLocation())
    }, [])


    const convertTemp = () => {
        const metrics = state.metric === 'units=metric'
            ? 'units=imperial'
            : 'units=metric'
        dispatch(convertTemperature(metrics))
        dispatch(getWeather(state.latitude, state.longitude))
    }

    const changeCity = (city) => {
        const data = city.split(',');
        const [cityName, lat, long] = data;
        dispatch(setLocation(lat, long, cityName))
        dispatch(getWeather(lat, long))
    }

      return (
        <div className="App">
            <MainHeader initialCity={state.initialCity}
                        initialLat={state.initialLat}
                        initialLong={state.initialLong}
                        city={state.city}
                        coord={[state.latitude, state.longitude]}
                        changeCity={changeCity}/>
            <DateAndLocation city={state.city}/>
            <WeatherInfo convertTemp={convertTemp}
                         temp={state.temperature}
                         feelsLike={state.feelsLikeTemp}
                         main={state.main}
                         description={state.description}
                         wind={state.wind}
                         humidity={state.humidity}
                         pressure={state.pressure}/>
        </div>
      )
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)