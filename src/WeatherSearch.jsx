import React, { useState } from "react";
import "./App.css";

function WeatherSearch() {
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Zoek een stad..."
        value={location}
        onChange={handleChange}
      />
      <button>Zoek</button>
    </div>
  );
}

export default WeatherSearch;
