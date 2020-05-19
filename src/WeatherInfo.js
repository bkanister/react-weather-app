import React from 'react'

export default class WeatherInfo extends React.Component{
    constructor(props) {
        super(props);
        this.convertTemperature = this.convertTemperature.bind(this);
    }

    convertTemperature() {
        const convertIcon = document.querySelector('.convertIcon');
        this.props.onClick();
        if (convertIcon.textContent === 'C') {
           setTimeout(() => convertIcon.textContent = 'F', 200)
        } else {
            setTimeout(() => convertIcon.textContent = 'C', 200)
        }
    }

    render() {
    return (
        <div className="weather-info">
            <div className="temperature-div">
                <div className="real-temperature">{this.props.temp}&deg;<span onClick={this.convertTemperature} className="convertIcon">C</span></div>
                <div className="feels-like-temperature">FEELS LIKE {this.props.feelsLike}&deg;C</div>
            </div>
            <div className="total-div">
                <div className="sub-header total-header">{this.props.main}</div>
                <div className="info total-info">{this.props.description}</div>
            </div>
            <div className="wind-div">
                <div className="sub-header wind-header">Wind</div>
                <div className="info wind-info">{this.props.wind} m/s</div>
            </div>
            <div className="humidity-div">
                <div className="sub-header humidity-header">Humidity</div>
                <div className="info humidity-info">{this.props.humidity} %</div>
            </div>
            <div className="pressure-div">
                <div className="sub-header pressure-header">Pressure</div>
                <div className="info pressure-info">{this.props.pressure}</div>
            </div>
            <div className="background"></div>
        </div>
    )}
}