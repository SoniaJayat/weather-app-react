import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = `2fe0035acto21f1ea33794b41270a58f`;
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&unit=metric
`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast mt-5">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"></img>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 19º</span>
            <span className="WeatherForecast-temperature-min"> 15º</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"></img>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 19º</span>
            <span className="WeatherForecast-temperature-min"> 15º</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"></img>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 19º</span>
            <span className="WeatherForecast-temperature-min"> 15º</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"></img>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 19º</span>
            <span className="WeatherForecast-temperature-min"> 15º</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"></img>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 19º</span>
            <span className="WeatherForecast-temperature-min"> 15º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
