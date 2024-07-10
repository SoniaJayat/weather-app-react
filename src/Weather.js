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

      <h1>Paris</h1>
      <ul>
        <li>Wednesday 14:30, broken clouds</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6 ">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="broken clouds"
          />

          <span className="main-temperature">26</span>
          <span className="unit">ºC</span>
        </div>

        <div className="col-6 ">
          <ul>
            <li>Humidity:46%</li>
            <li>Wind: 5.14km/h</li>
            <li>Precipitation: 0%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
