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
    } //todo: fix wind metrics from m/s to km/h

    const changeCity = (city) => {
        const data = city.split(',');
        const [cityName, lat, long] = data;
        dispatch(setLocation(lat, long, cityName))
        dispatch(getWeather(lat, long))
    }

      return (
        <div className="App">
            <MainHeader changeCity={changeCity}/>
            <DateAndLocation city={state.city}/>
            <WeatherInfo convertTemp={convertTemp}/>
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