
   
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {

    const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);


  }

  function handleCityChange(event) {
    setCity(event.target.value);

  }

  if (weatherData.ready) {
    return (
      <div className="Weather"> 
        <form onSubmit={handleSubmit}>
          <div className="row">
          <div className="col-9">
          <input
           type="search" 
           placeholder="Enter a city..." 
           className="form-control"
           autoFocus="on"
           onChange={handleCityChange}
           />
          </div>
          <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary"/>
          </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
 
  </div>
  );
} else {

  return "Loading...";
}
}

