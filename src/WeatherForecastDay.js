import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      {" "}
      <div className="col">
        <div className="WeatherForecast-day">{day()}</div>
        <div className="ForecastIcon d-flex justify-content-center  ">
          <img
            src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`}
            alt={props.data.condition.description}
          />
        </div>
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">
            {maxTemperature()}
          </span>
          <span className="WeatherForecast-temperature-min">
            {minTemperature()}
          </span>
        </div>
      </div>
    </div>
  );
}
