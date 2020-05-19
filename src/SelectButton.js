import React from 'react'

export default class SelectButton extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            chosenCity: ''
        }
    }



    handleChange(e) {
        this.props.changeCity(e.target.value);
        this.setState({
            chosenCity: e.target.value
        })
    }

    render() {
        const cities = [
            {
                name: this.props.initialCity,
                lat: this.props.initialLat,
                long: this.props.initialLong,
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
        const selectItems = cities.map(city => <option key={city.name} value={[city.name, city.lat, city.long]}>{city.name}</option>);
        return (
            <select value={this.state.chosenCity} onChange={this.handleChange} className="choose-city">
                {selectItems}
            </select>
        )
    }

}