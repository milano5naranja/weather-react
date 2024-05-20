import React from "react";
import WeatherIcon from './WeatherIcon';
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return  (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul>
      <li className="date">
        <FormattedDate date={props.data.date} />
      </li>
      <li className="text-capitalize">{props.data.description}</li>
    </ul>
   

  <div class="row">
    <div class="col-sm">
    <WeatherTemperature celsius={props.data.temperature} />
    </div>
    <div class="col-sm">
    <WeatherIcon code={props.data.icon} size={52} />
    </div>
    <div class="col-sm">
    
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
      
    </div>
  </div>
</div>
);
}