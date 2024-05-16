import React from "react";
import WeatherIcon from './WeatherIcon';

import WeatherTemperature from "./WeatherTemperature";


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
            <div>
        <WeatherIcon code={props.data.icon} size={52}/>
        </div>
       
        <div> <WeatherTemperature celcius={props.data.temperature} />
        </div>
        </div>
        </div>

        <div className="col-6">
          
  
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}</li>
          </ul>
       
      </div>
    </div>
    </div>
    
    );
}