
   
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: "Wednesday 07:00",
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    });
   
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);

  }

  function search() {

    const apiKey = "ff8e6a9e3d6fde87cb38868da460b1371";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);


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
          <input type="submit" value="Search" className="btn btn-primary w-100"/>
          </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
 
    </div>
  );
} else {
  search();
  return "Loading...";
}
}

