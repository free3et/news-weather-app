'use client';
import { useState } from 'react';
import { CurrencyElement } from '../types';
import style from './Currency.module.scss';

export const InputGetCurrency = (curency: CurrencyElement) => {
  const [value, setValue] = useState(1);
  const { cc, rate } = curency.curency;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={style.row}>
        <div className={`col-lg-2`}>
          <b>{cc}</b>
        </div>
        <div className={`${style.input} col-lg-6`}>
          <form onSubmit={submitHandler}>
            <input
              className={`${style.row_value}`}
              type='number'
              min='1'
              max='1000000000'
              value={value}
              onChange={(e) => {
                const inputValue = parseInt(e.target.value, 10);
                const maxValue = 1000000000;
                const clampedValue = Math.min(
                  Math.max(inputValue, 1),
                  maxValue,
                );
                setValue(clampedValue);
              }}
            />
          </form>
        </div>
        <div className={`${style.input} col-lg-4`}>
          {Math.floor(rate * value * 100) / 100}
        </div>
      </div>
      {value === 1000000000 && (
        <h5 className='error'>
          The entered number must be less than 1 billion
        </h5>
      )}
    </>
  );
};
