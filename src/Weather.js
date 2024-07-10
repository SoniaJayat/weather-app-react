import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
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
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>Paris</h1>
      <ul>
        <li>Wednesday 14:30 </li>
        <li>broken clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="broken clouds"
          />
          <h1>26ºC</h1>
        </div>
        <div className="col-6">
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
