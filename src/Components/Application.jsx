import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";

export default function Application() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery();
      console.log(data);
    }
  };

  return (
    <>
      <div className="searchContainer">
        <div className="searchBox">
          <input
            type="text"
            placeholder="search"
            className="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {weather.main && (
          <div className="city">
            <div className="info">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
            </div>
            <div className="details">
              <h2>
                <span className="cityName">{weather.name}</span>
                <sup>{weather.sys.country}</sup>
              </h2>
              <div className="cityTemp">
                {Math.round(weather.main.temp)}
                <sup>&deg;C</sup>
                <p>{weather.weather[0].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
