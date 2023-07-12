'use client'
import { NewsNavigation } from './components/NewsComponent/NewsNavigation';
import { SearchNews } from './components/NewsComponent/SearchNews';
import { NewsList } from './components/NewsComponent/NewsList';
import { NewsListSearch } from './components/NewsComponent/NewsListSearch';
import { TopNews } from './components/NewsComponent/TopNews';
import stylesLayout from "./Layout.module.scss";
import './common.scss';
import { useState } from 'react';
import { WeatherComponentWrapper } from './components/WeatherComponent/WeatherComponentWrapper';

export default function Home() {
const [category, setCategory] = useState("technology");
const [search, setSearchNews] = useState("");

  function getCategory(item: string) {
    setCategory(item);
    setSearchNews("");
  }

  function getSearchNews(item: string) {
    setSearchNews(item);
  }
  return (
      <div>
         <main>

         <div className="container">

        <div className="row">
          <NewsNavigation getCategory={getCategory} />
        </div>
        <div className="row">
          <div className={`${stylesLayout.news_top_navigation} col-lg-12`}>
            <SearchNews getSearchNews={getSearchNews} />
          </div>
        </div>
        <div className="container">
          <div className={stylesLayout.content_wrapper}>
            <div className={`${stylesLayout.news_wrapper} col-sm-12 col-lg-8`}>
              {search === "" && (
                <>
                  <h2>Top news</h2>
                  <TopNews search={search}/>
                </>
              )}

              {search === "" && (
                <>
                  <a id={category} ></a>
                  <h2>{category}</h2>
                  <NewsList category={category} search={search}/>
                </>
              )}
              {search !== "" && (
                <>
                  <h2>Search results &ldquo;{search}&ldquo;</h2>
                  <NewsListSearch search={search}/>
                </>
              )}
            </div>

            <div
              className={`${stylesLayout.weather_currency_wrapper} col-md-12 col-sm-12 col-lg-4 col-12`}
            >
              <WeatherComponentWrapper />
              {/* <Currency /> */}
            </div>
          </div>
        </div>

    </div>
          </main>
      </div>
  )
}