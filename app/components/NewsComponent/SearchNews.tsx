'use client'
import { useState } from "react";
import styles from "./News.module.scss";

export const SearchNews = ({ getSearchNews }) => {
  const [value, setValue] = useState("");

  return (
    <div className={`${styles.search_field} col-12 col-md-12 col-lg-6`}>
      <input
        type="text"
        id="search-input"
        name="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => {
          getSearchNews(e.target.value);
          setValue("");
        }}
      />
    </div>
  );
};
