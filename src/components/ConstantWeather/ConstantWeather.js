import React from 'react';
import './ConstantWeather.css'

function constantWeather(props) {
    return (
        <div className="Card">
            <div>{props.cityName}, {props.country}</div>
            <div>{Math.round(props.temperature)}°c</div>
            <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="icon"/>
        </div>
    )
}

export default constantWeather;