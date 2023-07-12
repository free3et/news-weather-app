'use client'
import { useState } from "react";
import styles from "./News.module.scss";

type GetSearchNews = {
  getSearchNews: (item: string) => void
}

export const SearchNews = ({ getSearchNews }: GetSearchNews) => {
  const [value, setValue] = useState("");

  return (
    <div className={`${styles.search_field} col-12 col-md-12`}>
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
