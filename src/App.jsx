import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="weather-app">
      <h1>Weer App</h1>
      <WeatherSearch />
      <div className="weather-info">
        <h2>Amsterdam</h2>
        <p className="temperature">15°C</p>
        <img src="https://openweathermap.org/img/wn/01d.png" alt="zonnig" />
        <p className="description">Zonnig</p>
      </div>
      <footer
        style={{ marginTop: "2rem", textAlign: "center", fontSize: "14px" }}
      >
        <p>
          Bekijk de code op{" "}
          <a
            href="https://github.com/esmeep/ReactWeek4"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
