'use client'
//import {useSelector} from 'react-redux'
import { NewsNavigation } from './components/NewsComponent/NewsNavigation';
import {useSearchParam} from './context/hooks/useSearchParam'
import stylesLayout from "./Layout.module.scss";
import './common.scss';
import { SelectCountry } from './components/NewsComponent/SelectCountry';
import { SearchNews } from './components/NewsComponent/SearchNews';
import { NewsList } from './components/NewsComponent/NewsList';
import { NewsListSearch } from './components/NewsComponent/NewsListSearch';
import { TopNews } from './components/NewsComponent/TopNews';

export default function Home() {
//const userName = useSelector((state) => state.authReducer.value.userName)
const [country, category, search, getCategory, getCountry, getSearchNews] = useSearchParam();
  return (
      <div>
         <main>

         <div className="container">

        <div className="row">
          <NewsNavigation getCategory={getCategory} />
        </div>
        <div className="row">
          <div className={`${stylesLayout.news_top_navigation} col-lg-12`}>
            <SelectCountry getCountry={getCountry} />
            <SearchNews getSearchNews={getSearchNews} />
          </div>
        </div>
        <div className="row">
          <div className={stylesLayout.content_wrapper}>
            <div className={`${stylesLayout.news_wrapper} col-sm-12 col-lg-9`}>
              {search === "" && (
                <>
                  <h2>Top news</h2>
                  <TopNews country={country} search={search}/>
                </>
              )}

              {search === "" && (
                <>
                  <a name={category}></a>
                  <h2>{category}</h2>
                  <NewsList category={category} country={country} search={search}/>
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
              className={`${stylesLayout.weather_currency_wrapper} col-md-12 col-sm-12 col-lg-3 col-12`}
            >
              {/* <WeatherPage />
              <Currency /> */}
            </div>
          </div>
        </div>

    </div>
          </main>
      </div>
  )
}