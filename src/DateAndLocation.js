import React from 'react'

const DateAndLocation = ({city}) => {
    const date = new Date();
    const options = {month: 'long', day: 'numeric'};
    const dateInfo = date.toLocaleString('en-US', options);

    return (
        <div className="date-and-location">
            <div className="date">{dateInfo}</div>
            <div className="location">{city}</div>
        </div>
    )
}

export default DateAndLocation