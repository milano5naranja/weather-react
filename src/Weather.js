import React, { useState, useEffect } from "react";
import './index.css'; 

export default function Weather(props) {
    // State to store weather data
    const [weatherData, setWeatherData] = useState(null);
    // State to store user input for city
    const [cityInput, setCityInput] = useState("");

    useEffect(() => {
        // Fetch weather data when the component mounts or when cityInput changes
        if (cityInput) {
            let apiKey = "ed238469f9b5e9d801834270e65449bc";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Update weatherData state with fetched data
                    setWeatherData(data);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    // Clear weatherData state if there's an error
                    setWeatherData(null);
                });
        }
    }, [cityInput]);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Update cityInput state with the value from the input field
        setCityInput(event.target.elements.city.value);
    };

    return (
        <div className="Weather">
            <form className="mb-3" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input
                            type="search"
                            name="city"
                            placeholder="Type a city..."
                            className="form-control"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-3">
                        <input
                            type="submit"
                            value="Search"
                            className="btn btn-primary shadow-sm w-100"
                        />
                    </div>
                </div>
            </form>
            {weatherData && (
                <div>
                    <div className="overview">
                        <h1>{weatherData.name}</h1>
                        <ul>
                            <li>Last updated: {new Date().toLocaleString()}</li>
                            <li>{weatherData.weather[0].description}</li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex weather-temperature">
                                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
                                <div>
                                    <strong>{weatherData.main.temp}&deg;C</strong>
                                    <span className="units">| °F</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Humidity: {weatherData.main.humidity}%</li>
                                <li>Wind: {weatherData.wind.speed} km/h</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

    


