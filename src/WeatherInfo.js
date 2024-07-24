import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1 className="mt-4">{props.data.city}</h1>
          <ul>
            <div className="weather-app-details"></div>
            <li className="date-description text-capitalize">
              <FormattedDate date={props.data.date} />
              {props.data.description}
            </li>
          </ul>
        </div>

        <div className="col-6">
          <div className="main-weather mt-4">
            <img src={props.data.iconUrl} alt={props.data.description} />

            <span className="main-temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">ºC</span>
          </div>
        </div>
      </div>
      <ul>
        <li>
          Humidity:{" "}
          <strong className="weather-details">{props.data.humidity}%</strong>,
          Wind:{" "}
          <strong className="weather-details">{props.data.wind}km/h</strong>
        </li>
      </ul>
    </div>
  );
}
