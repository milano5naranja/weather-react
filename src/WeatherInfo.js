import React from "react";
import WeatherIcon from " ./WeatherIcon";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
    <ul>
      <li>
        date
      </li>
      <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row">
      <div className="col-6">
        <div className="float-left">
        <WeatherIcon code={props.data.icon} alt= {props.data.description} />
        <img
          src={props.data.iconUrl}
          alt={props.data.description}
          className="float-left"
        />
      
        </div>
        <div className="col-6">
          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">℃</span>
  
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}</li>
          </ul>
        </div>
      </div>
    </div>
    </div>  
    );
}