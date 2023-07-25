import styles from './Weather.module.scss';
import { useGetForecastQuery } from '@/app/redux/features/weatherSlice';
import { Forecast, WeatherComponentProps } from '../types';

export const ForecastComponent: React.FC<WeatherComponentProps> = ({
  location,
}) => {
  const { data = [], isError } = useGetForecastQuery(location);

  const imgUrl = 'https://openweathermap.org/img/wn';

  const unixToDate = (unixDate: number) => {
    return new Date(unixDate * 1000).toISOString().split('T')[1].slice(0, 5);
  };

  return (
    <>
      {!isError && data ? (
        <div className={styles.location__wrapper}>
          <div className={styles.location}>
            {data?.list?.map((item: Forecast, index: number) => {
              return (
                <div key={index} className={styles.location__bottom}>
                  <div className={styles.location__bottom_date}>
                    <img
                      src={`${imgUrl}/${item?.weather[0]?.icon}.png`}
                      alt='weather'
                    />
                    <p>{unixToDate(item?.dt)}</p>
                  </div>
                  <p className={styles.temp}>
                    {item?.main?.feels_like.toFixed()}°C
                  </p>
                  <p className={styles.humidity}>{item?.main?.humidity}%</p>
                  <p className={styles.speed}>
                    {item?.wind?.speed.toFixed()} м/с
                  </p>
                  <p className={styles.pressure}>{item?.main?.pressure}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};
