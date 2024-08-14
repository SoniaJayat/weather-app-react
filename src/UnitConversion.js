import React, { useState } from "react";
import "./Weather.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="UnitConversion text-decoration-none">
        <span className="main-temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          ºC |{" "}
          <a
            href="/"
            onClick={convertToFahrenheit}
            className="text-decoration-none"
          >
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="UnitConversion ">
        <span className="main-temperature">{Math.round(fahrenheit())}</span>
        <span className="unit ">
          <a
            href="/"
            onClick={convertToCelsius}
            className="text-decoration-none"
          >
            ºC{" "}
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
