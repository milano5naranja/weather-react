
   
import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: "Wednesday 07:00",
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    });
   
  }

  if (weatherData.ready) {
    return (
      <div className="Weather"> 
        <form>
          <div className="row">
          <div className="col-9">
          <input type="search" placeholder="Enter a city..." className="form-control"/>
          </div>
          <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary"/>
          </div>
          </div>
        </form>
  <h1>{weatherData.city}</h1>
  <ul>
    <li>{weatherData.date}</li>
    <li className="text-capitalize">{weatherData.description}</li>
  </ul>
  <div className="row">
    <div className="col-6">
      <img
        src={weatherData.iconUrl}
        alt={weatherData.description}
      />
    
      </div>
      <div className="col-6">
        <span className="temperature">{weatherData.temperature}</span>
        <span className="unit">℃</span>

        <ul>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind}</li>
        </ul>
      </div>
    </div>
  </div>
  );
} else {

  const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.default.city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}
}

