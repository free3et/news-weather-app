'use client'
import { useState } from 'react';
import { GetLocation } from "../types";
import styles from "./Weather.module.scss";


export const InputGetLocationComponent: React.FC<GetLocation> = ({getLocation}) => {
  const [inputValue, setInputValue] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getLocation(inputValue)
  }

  return (
    <div className={styles.weather__search}>
      <form onSubmit={submitHandler}>
        <input
          className={styles.weather__input}
          value={inputValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
          onBlur={() => getLocation(inputValue)}
          placeholder="Enter Location"
          type="text"
        />
        </form>
      </div>
  );
};