import styles from './Weather.module.scss';
import { useGetWeatherQuery } from '@/app/redux/features/weatherSlice';
import { Loader } from '../Loader/Loader';
import { WeatherComponentProps } from '../types';
import { FC } from 'react';

export const WeatherComponent: FC<WeatherComponentProps> = ({
  location,
}) => {
  const imgUrl = 'https://openweathermap.org/img/wn';

  const { data = [], isLoading, isError } = useGetWeatherQuery(location);

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <div>
          <h4 className='error'>Please enter the correct city name</h4>
        </div>
      )}
      {!isError && data ? (
        <div className={styles.container}>
          <div className={styles.location__top}>
            <div className={styles.location__header}>
              <p className={styles.location__header_title}>{data?.name}</p>
            </div>
            <>
              <img
                alt='forecast'
                className={styles.location__img}
                src={`${imgUrl}/${
                  data?.weather ? data?.weather[0].icon : '01d'
                }@2x.png`}
              />
            </>
            <div className={styles.location__top_temp}>
              {data?.main ? <p>{data?.main.temp.toFixed()}°C</p> : null}
            </div>
          </div>
          <div className={styles.location__bot}>
            <div className={styles.location__bot_desc}>
              {data?.main ? <p>{data?.weather[0].description}</p> : null}
            </div>
            <div className={styles.location__bot_feels}>
              {data?.main ? <p>{data?.main.feels_like.toFixed()}°C</p> : null}
            </div>
            <div className={styles.location__bot_humidity}>
              {data?.main ? <p>{data?.main.humidity} %</p> : null}
            </div>
            <div className={styles.location__bot_speed}>
              {data?.wind ? <p>{data?.wind.speed.toFixed()} м/с</p> : null}
            </div>
            <div className={styles.location__bot_pressure}>
              {data?.main ? <p>{data?.main.pressure}</p> : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
