'use client';
import { useState } from 'react';
import { ForecastComponent } from './ForecastComponent';
import { WeatherComponent } from './WeatherComponent';
import styles from './Weather.module.scss';
import { InputGetLocationComponent } from './InputGetLocationComponent';

export const WeatherComponentWrapper = () => {
  const [location, setLocation] = useState<string>('kyiv');

  function getLocation(location: string) {
    setLocation(location);
  }

  return (
    <div className={`${styles.weather}`}>
      <InputGetLocationComponent getLocation={getLocation} />
      <WeatherComponent location={location} />
      <ForecastComponent location={location} />
    </div>
  );
};
