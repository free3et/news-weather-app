'use client';
import { NewsCategoryNavigation } from './components/NewsComponent/NewsCategoryNavigation';
import { InputSearchNews } from './components/NewsComponent/SearchNews/InputSearchNews';
import { NewsListCategory } from './components/NewsComponent/NewsByCategory/NewsListCategory';
import { NewsListSearch } from './components/NewsComponent/SearchNews/NewsListSearch';
import { TopNewsList } from './components/NewsComponent/TopNews/TopNewsList';
import stylesLayout from './Layout.module.scss';
import './common.scss';
import { useState } from 'react';
import { WeatherComponentWrapper } from './components/WeatherComponent/WeatherComponentWrapper';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CurrencyComponent } from './components/CurrencyComponent/CurrencyComponent';

export default function Home() {
  const [category, setCategory] = useState('technology');
  const [search, setSearchNews] = useState('');

  function getCategory(item: string) {
    setCategory(item);
    setSearchNews('');
  }

  function getSearchNews(item: string) {
    setSearchNews(item);
  }
  return (
    <main>
      <Header />
      <div className='container'>
        <div className='row'>
          <NewsCategoryNavigation getCategory={getCategory} />
        </div>
        <div className='row'>
          <div className={`${stylesLayout.news_top_navigation} col-12`}>
            <InputSearchNews getSearchNews={getSearchNews} />
          </div>
        </div>
        <div className='row'>
          <div className={stylesLayout.content_wrapper}>
            <div
              className={`${stylesLayout.news_wrapper} col-sm-12 col-md-8 col-lg-8`}
            >
              {search === '' && (
                <>
                  <h2>Top news</h2>
                  <TopNewsList search={search} />
                </>
              )}

              {search === '' && (
                <>
                  <a id={category}></a>
                  <h2>{category}</h2>
                  <NewsListCategory category={category} search={search} />
                </>
              )}
              {search !== '' && (
                <>
                  <h2>Search results &ldquo;{search}&ldquo;</h2>
                  <NewsListSearch search={search} />
                </>
              )}
            </div>

            <div
              className={`${stylesLayout.weather_currency_wrapper} col-md-4 col-sm-12 col-lg-4 col-12`}
            >
              <WeatherComponentWrapper />
              <CurrencyComponent />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
