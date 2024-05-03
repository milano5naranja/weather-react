import React, { useState } from "react";
import axios from "axios";
import "./Search.css";



function Search() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState("");

  function showTemperature(response) {
    setLoading(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "ed238469f9b5e9d801834270e65449bc";
    let apiUnit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${apiUnit}`;
    axios.get(apiUrl).then(showTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSearch}>
      <input
        className="form-city"
        type="search"
        placeholder="Enter a city.."
        onChange={updateCity}
      />
      <button className="form-button" type="Submit">
        Search
      </button>
    </form>
  );

  if (loading) {
    return (
      <div>
        {form}
        <ul style={{ listStyleType: "none" }}>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

export default Search;