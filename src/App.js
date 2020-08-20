import React, { useState, useEffect } from 'react';

const api = {
  key: "0b5e84adb64509589cc6d96bf7513dce",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [weatherConst, setWeatherConst] = useState([]);

  useEffect()

  // zg 6389
  // amst 1524
  // rey 91
  // apibase + group?id=524901,703448,2643743&units=metric

  function apiCall() {
    fetch(`${api.base}weather?q=${query}&unit=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('')
        console.log(result)
      })
  }

  const search = evt => {
    if (evt.key === "Enter") {
      apiCall()
    }
  }

  const searchCitiyClick = () => {
    apiCall()
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`
  }

  const backgroundColor = (weatherTemp) => {
    if (weatherTemp < 278) {
      return 'app winter'
    }
    if (weatherTemp >= 278 && weatherTemp < 288) {
      return 'app cold'
    }
    if (weatherTemp >= 288 && weatherTemp < 298) {
      return 'app springy'
    }
    if (weatherTemp >= 298) {
      return 'app hot'
    }
  }



  return (
    <div className={
      (typeof weather.main != "undefined")
        ? backgroundColor(weather.main.temp)
        : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className="button-holder">
          <button className="search-button" onClick={() => searchCitiyClick()}>Search City</button>
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp - 273.15)}°c
          </div>
              <div className="weather">
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" />
                <h3>{weather.weather[0].main}</h3>
              </div>
            </div>
          </div>

        ) : ("")}
      </main>
    </div>
  );
}

export default App;
