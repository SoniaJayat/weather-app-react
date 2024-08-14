import React from "react";
import FormattedDate from "./FormattedDate";
import UnitConversion from "./UnitConversion";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-4 text-center">{props.data.city}</h1>
      <div className="Main-Weather-Data">
        <div className="main-weather mt-4">
          <img src={props.data.iconUrl} alt={props.data.description} />

          <UnitConversion celsius={props.data.temperature} />
        </div>
      </div>

      <ul>
        <li className="date-description text-capitalize mt-3 text-center ">
          <FormattedDate date={props.data.date} />
          {props.data.description}
        </li>
      </ul>

      <ul className="list-sortation mt-4 ">
        <li>
          Humidity:{" "}
          <strong className="weather-details">{props.data.humidity}%</strong>{" "}
        </li>
        <li>
          Wind:{" "}
          <strong className="weather-details">{props.data.wind}km/h</strong>
        </li>
      </ul>

      <ul></ul>
    </div>
  );
}
