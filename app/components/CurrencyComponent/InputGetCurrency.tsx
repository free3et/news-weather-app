'use client'
import { useState } from "react";
import style from "./Currency.module.scss";
import { CurrencyElement } from "../types";

export const InputGetCurrency = ({curency}: CurrencyElement) => {
  const [value, setValue] = useState(1)
  const {cc, rate} = curency

  return (
      <div className={style.row}>
          <div className={`col-lg-3`}>{cc}</div>
          <div className={`${style.input} col-lg-6`}>
            <input className={`${style.row_value}`} type="number" inputMode="numeric" pattern="[0-9]*" min="1" max="1000000000" value={value} onChange={(e) => setValue(+e.target.value)}/>
          </div>
          <div className={`${style.input} col-lg-4`}>{Math.floor((rate * value) * 100) / 100}</div>
      </div>
  )
}