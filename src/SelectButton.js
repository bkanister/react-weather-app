import React, {useState} from 'react'

const SelectButton = props => {
    const [city, changeCity] = useState('')
    const citiesArray = [
        {
            name: props.initialCity,
            lat: props.initialLat,
            long: props.initialLong,
        },
        {
            name:'Moscow',
            lat: 55.75,
            long: 37.61,
        }, {
            name:'London',
            lat: 51.50,
            long: -0.12,
        }, {
            name:'New-York',
            lat: 40.71,
            long: -74.00,
        },
    ];

    const handleChangeCity = (e) => {
        props.changeCity(e.target.value);
        changeCity(e.target.value)
    }

    const citiesOptions = citiesArray.map(city => {
        return (<option key={city.name} value={[city.name, city.lat, city.long]}>
                    {city.name}
                </option>)
    });

    return (
        <select value={city} onChange={handleChangeCity} className="choose-city">
            {citiesOptions}
        </select>
    )
}

export default SelectButton