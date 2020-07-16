import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    initialCity: '',
    initialLat: '',
    initialLong: '',
    city: '',
    latitude: 0,
    longitude: 0,
    temperature: 0,
    feelsLikeTemp: 0,
    main: '',
    description: '',
    wind: 0,
    humidity: 0,
    pressure: 0,
    metric: 'units=metric'
}

export const setLocation = createAction('SET_LOCATION', function prepare(lat, long, city) {
    return {
        payload: {
            lat,
            long,
            city
        }
    }
})

export const setInitialLocation = createAction('SET_INITIAL_LOCATION', function prepare(lat, long, city) {
    return {
        payload: {
            lat,
            long,
            city
        }
    }
})

export const setWeather = createAction('SET_WEATHER',
    function prepare(temperature, feelsLikeTemp, windSpeed, main, weatherDescription, humidity, pressure) {
    return {
        payload: {
            temperature,
            feelsLikeTemp,
            windSpeed,
            main,
            weatherDescription,
            humidity,
            pressure
        }
    }
})

export const convertTemperature = createAction('CONVERT_TEMPERATURE', function prepare(metric) {
    return {
        payload: {
            metric
        }
    }
})

const rootReducer = createReducer(initialState,{
    [setInitialLocation]: (state, action) => {
        return {
            ...state,
            initialCity: action.payload.city,
            initialLat: action.payload.lat,
            initialLong: action.payload.long,
            latitude: action.payload.lat,
            longitude: action.payload.long,
            city: action.payload.city,
        }
    },
    [setLocation]: (state,action) => {
        return {
            ...state,
            latitude: action.payload.lat,
            longitude: action.payload.long,
            city: action.payload.city,
        }
    },
    [setWeather]: (state, action) => {
        return {
            ...state,
            temperature: action.payload.temperature,
            feelsLikeTemp: action.payload.feelsLikeTemp,
            wind: action.payload.windSpeed,
            main: action.payload.main,
            description: action.payload.weatherDescription,
            humidity: action.payload.humidity,
            pressure: action.payload.pressure
        }
    },
    [convertTemperature]: (state, action) => {
        return {
            ...state,
            metric: action.payload.metric
        }
    }
})



export default rootReducer