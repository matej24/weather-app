import React, { useState } from 'react';

const api = {
  key: "0b5e84adb64509589cc6d96bf7513dce",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

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



  return (
    <div className={
      (typeof weather.main != "undefined")
        ? ((weather.main.temp > 289)
          ? 'app warm'
          : 'app')
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
                {weather.weather[0].main}
              </div>
            </div>
          </div>

        ) : ("")}
      </main>
    </div>
  );
}

export default App;
