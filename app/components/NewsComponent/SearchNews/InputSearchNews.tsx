'use client';
import { FormEvent, useState } from 'react';
import styles from '../News.module.scss';

// eslint-disable-next-line no-unused-vars
type GetSearchNews = {
  getSearchNews: (item: string) => void;
};

export const InputSearchNews = ({ getSearchNews }: GetSearchNews) => {
  const [value, setValue] = useState<string>('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getSearchNews(value);
  };

  return (
    <div className={`${styles.search_field} col-12 col-md-12`}>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          id='search-input'
          name='search'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => {
            getSearchNews(e.target.value);
            setValue('');
          }}
        />
      </form>
    </div>
  );
};
