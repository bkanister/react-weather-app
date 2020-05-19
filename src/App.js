import React from 'react';
import MainHeader from "./MainHeader";
import DateAndLocation from "./DateAndLocation";
import WeatherInfo from "./WeatherInfo";
import './styles.scss'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.getWeather = this.getWeather.bind(this);
        this.setWeather = this.setWeather.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.setLocation = this.setLocation.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.convertTemp = this.convertTemp.bind(this);
    }

    state = {
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
    };

    componentDidMount() {
        this.getLocation();
    }

    setLocation(lat, long, city) {
        console.log('setting location...', lat, long, city)
        this.setState({
            latitude: lat,
            longitude: long,
            city: city,
            initialCity: city,
            initialLat: lat,
            initialLong: long,
        });
        this.getWeather(lat, long)
    }

    setWeather(data) {
        console.log('setting weather...', data)
        this.setState({
            temperature: parseInt(data.main['temp'], 10),
            feelsLikeTemp: parseInt(data.main['feels_like'], 10),
            wind: data.wind['speed'],
            main: data['weather'][0]['main'],
            description: data['weather'][0]['description'],
            humidity: data.main['humidity'],
            pressure: data.main['pressure']
        })
    }

    getLocation() {
        fetch('http://ipinfo.io/json?token=d4328e21271872')
            .then((response) => {
                return response.json();
            })
            .then((data) => new Promise(() => {
                const lat = Number(data.loc.split(',')[0]).toFixed(2);
                const long = Number(data.loc.split(',')[1]).toFixed(2);
                console.log('getting location...', data);
                this.setLocation(lat, long, data.city);
        }))
    }


    getWeather(lat, long) {
        let metrics = this.state.metric;
        console.log('getting weather...', lat, long);
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=366f4fce3fad6e08b35ee24a8d79a753&${metrics}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => this.setWeather(data))
    }

    convertTemp() {
        this.setState({
            metric: this.state.metric === 'units=metric' ? this.state.metric = 'units=imperial' : this.state.metric = 'units=metric'
        })
        this.getWeather(this.state.latitude, this.state.longitude)
    }

    changeCity(city) {
        let data = city.split(',');
        let [cityName, lat, long] = data;
        console.log(cityName, lat, long);
        this.setState({
            city: cityName,
            latitude: lat,
            longitude: long
        });
        this.getWeather(lat, long)
    }


    render() {
      return (
        <div className="App">
            <MainHeader initialCity={this.state.initialCity} initialLat={this.state.initialLat} initialLong={this.state.initialLong} city={this.state.city} coord={[this.state.latitude, this.state.longitude]} onChange={this.changeCity}/>
            <DateAndLocation city={this.state.city}/>
            <WeatherInfo onClick={this.convertTemp} temp={this.state.temperature} feelsLike={this.state.feelsLikeTemp} main={this.state.main}
            description={this.state.description} wind={this.state.wind} humidity={this.state.humidity} pressure={this.state.pressure}/>
        </div>
      )}
}