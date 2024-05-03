import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Helsinki",
    date: "Friday",
    time: "17:15",
    temperature: 10,
    description: "Sunny",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    humidity: 21,
    wind: 4,
  };
  return (
    <div className="Weather">
      <div className="weather-app">
        <form id="search-form" className="d-flex justify-content-end mb-3">
          <div className="row">
            <div className="searchBar col-8">
              <input
                type="search"
                placeholder="Type a city name..."
                className="form-control"
                id="city-input"
                autocomplete="off"
              />
            </div>
            <div className="searchBar col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary w-80"
              />
            </div>
          </div>
        </form>

   

        <div className="overview">
          <h1 id="city">{weatherData.city}</h1>
          <ul>
            <li id="date">
              {weatherData.date} | {weatherData.time}
            </li>
          </ul>
        </div>

       

        <div className="row current-conditions">
          <div className="col-7">
            <div className="d-flex weather-temperature">
            
              <img
                src={weatherData.imgUrl}
                alt="cloudy weather "
                id="icon"
              />
              <div>
                <strong id="temperature">{weatherData.temperature}</strong>
                <span className="units">
              
                 
              
                
                </span>
              </div>
            </div>
          </div>
          <div class="col-5">
            <ul className="weather-description">
              <li id="description">{weatherData.description}</li>
              <li>
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{weatherData.wind}</span> mp/h
              </li>
            </ul>
          </div>
        </div>


        <div className="weather-forecast" id="forecast"></div>
      </div>
     
        <footer>This app was coded by <a href="https://github.com/milano5naranja" target="_blank" rel='noreferrer'>Jenni Salmi</a> and it is open-sourced in on <a href="https://github.com/milano5naranja/weather-react" target="_blank" rel='noreferrer'>GitHub</a> and hosted on <a href="https://curious-syrniki-c5ac43.netlify.app/" target="_blank" rel='noreferrer'>Netlify</a></footer>

    
    </div>
  );
}