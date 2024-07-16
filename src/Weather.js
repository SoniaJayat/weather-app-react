import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      date: "Wednesday 17:45",
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <header>
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="submit btn btn-primary "
                />
              </div>
            </div>
          </form>
        </header>

        <div className="row">
          <div className="col-6">
            <h1 className="mt-4">{weatherData.city}</h1>
            <ul>
              <div className="weather-app-details"></div>
              <p className="date-description text-capitalize ">
                {weatherData.date}, {weatherData.description}
              </p>
            </ul>
          </div>

          <div className="col-6">
            <div className="main-weather mt-4">
              <img src={weatherData.iconUrl} alt={weatherData.description} />

              <span className="main-temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">ºC</span>
            </div>
          </div>
        </div>

        <ul>
          <li>
            Humidity:{" "}
            <strong className="weather-details">{weatherData.humidity}%</strong>
            , Wind:{" "}
            <strong className="weather-details">{weatherData.wind}km/h</strong>
          </li>
        </ul>
      </div>
    );
  } else {
    const apiKey = "2fe0035acto21f1ea33794b41270a58f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
