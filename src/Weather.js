import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h1 className="mt-4">Paris</h1>
          <ul>
            <div className="weather-app-details"></div>
            <li>Wednesday 14:30, broken clouds</li>
          </ul>
        </div>

        <div className="col-6">
          <div className="main-weather mt-4">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="broken clouds"
            />

            <span className="main-temperature">26</span>
            <span className="unit">ºC</span>
          </div>
        </div>
      </div>

      <ul>
        <li>
          Humidity: <strong className="weather-details">46%</strong>
        </li>
        <li>
          Wind: <strong className="weather-details">5.14km/h</strong>
        </li>
        <li>
          Precipitation: <strong className="weather-details">0%</strong>
        </li>
      </ul>
    </div>
  );
}
