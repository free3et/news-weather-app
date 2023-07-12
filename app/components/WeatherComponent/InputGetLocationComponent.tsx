"use client";
import React, { useState } from "react";
import { GetLocation } from "../types";
import styles from "./Weather.module.scss";


export const InputGetLocationComponent: React.FC<GetLocation> = ({getLocation}) => {
  const [location] = useState<string>("kyiv");

  return (
    <div className={styles.weather__search}>
        <input
          className={styles.weather__input}
          value={location}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => getLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
        />
      </div>
  );
};
