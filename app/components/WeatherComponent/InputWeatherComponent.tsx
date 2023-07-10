"use client";
import React, { useState } from "react";
import { ForecastComponent } from "./ForecastComponent";
import { WeatherComponent } from "./WeatherComponent";
import styles from "./Weather.module.scss";

export const InputWeatherComponent = () => {
  const [location, setLocation] = useState<string>("Київ");

  return (
    <div
      className={`${styles.weather} col-sm-7 col-lg-12 col-md-6 col-10 mx-auto`}
    >
      <div className={styles.weather__search}>
        <input
          className={styles.weather__input}
          value={location}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <WeatherComponent location={location}/>
      <ForecastComponent location={location}/>

     </div>
  );
};
