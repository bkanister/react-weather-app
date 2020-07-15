import React from 'react';
import SelectButton from "./SelectButton";

const MainHeader = (props) => {
    return (
        <header className="main-header">
            <div className="logo">weatherApp</div>
            <SelectButton changeCity={props.onChange} initialCity={props.initialCity} initialLat={props.initialLat} initialLong={props.initialLong} currentCity={props.city} coord={props.coord}/>
            <video autoPlay muted loop id="myVideo">
                <source src="https://static.videezy.com/system/resources/previews/000/044/744/original/tm1.mp4"/>
            </video>
        </header>
    )
}

export default MainHeader