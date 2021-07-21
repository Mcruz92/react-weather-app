import React from "react";

import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo col-4">
      <h1>{props.data.city}</h1>

      <div className="text-capitalize" id="current">
        {props.data.description}
      </div>
      <WeatherTemperature celsius={props.data.temperature} />
      <div>
        <WeatherIcon code={props.data.icon} />
      </div>
      <br />
      <p>
        Humidity: <span id="humidity">{props.data.humidity}</span>%
        <br />
        Wind: <span id="wind">{props.data.wind}</span> km/h
      </p>
    </div>
  );
}
