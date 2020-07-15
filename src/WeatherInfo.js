import React from 'react'

const WeatherInfo = ({convertTemp, ...props}) => {

    const convertTemperature = () => {
        const convertIcon = document.querySelector('.convertIcon');
        convertTemp();
        if (convertIcon.textContent === 'C') {
           setTimeout(() => convertIcon.textContent = 'F', 200)
        } else {
            setTimeout(() => convertIcon.textContent = 'C', 200)
        }
    }

    return (
        <div className="weather-info">
            <div className="temperature-div">
                <div className="real-temperature">{props.temp}&deg;
                    <span onClick={convertTemperature} className="convertIcon">C</span>
                </div>
                <div className="feels-like-temperature">FEELS LIKE {props.feelsLike}&deg;C</div>
            </div>
            <div className="total-div">
                <div className="sub-header total-header">{props.main}</div>
                <div className="info total-info">{props.description}</div>
            </div>
            <div className="wind-div">
                <div className="sub-header wind-header">Wind</div>
                <div className="info wind-info">{props.wind} m/s</div>
            </div>
            <div className="humidity-div">
                <div className="sub-header humidity-header">Humidity</div>
                <div className="info humidity-info">{props.humidity} %</div>
            </div>
            <div className="pressure-div">
                <div className="sub-header pressure-header">Pressure</div>
                <div className="info pressure-info">{props.pressure}</div>
            </div>
            <div className="background"></div>
        </div>
    )
}

export default WeatherInfo