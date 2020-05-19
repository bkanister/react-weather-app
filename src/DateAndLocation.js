import React from 'react'

export default function DateAndLocation(props) {
    let date = new Date();
    const options = {month: 'long', day: 'numeric'};
    let dateInfo = date.toLocaleString('en-US', options);

    return (
        <div className="date-and-location">
            <div className="date">{dateInfo}</div>
            <div className="location">{props.city}</div>
        </div>
    )
}