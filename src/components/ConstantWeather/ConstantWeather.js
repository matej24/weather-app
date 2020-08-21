import React from 'react';
import './ConstantWeather.css' // no need named import for classes >>>> classes from 'xx'

function constantWeather(props) {
    return (
        <div className="Card">
            {/*
                - no need to provide key here. >>>> key={props.cityId}
                - need to write string as className
            */}
            <div>{props.cityName}, {props.country}</div>
            <div>{props.temperature}</div>
            <img />
        </div>
    )
}

export default constantWeather;