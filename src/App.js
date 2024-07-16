import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://uk.linkedin.com/in/sonia-jayatheesan-9b928b268"
              target="_blank"
              rel="noreferrer"
            >
              Sonia Jayatheesan
            </a>{" "}
            and is {""}
            <a
              href="https://github.com/SoniaJayat/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
