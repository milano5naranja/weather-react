import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";


export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    let apiKey = "4f0252e46f5ob21t364250ae01f31bc7";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    Axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Fri</div>
                    <WeatherIcon code = "13d" size={36} />
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19
                        </span>
                        <span className="WeatherForecast-temperature-min">10
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}