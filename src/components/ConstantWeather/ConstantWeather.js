import React from 'react';
import classes from './ConstantWeather.css'

function constantWeather(props) {
    return (
        <div className={classes.Card} key={props.cityId}>
            <div>{props.cityName}, {props.country}</div>
            <div>{props.temperature}</div>
            <img />
        </div>
    )
}

export default constantWeather;