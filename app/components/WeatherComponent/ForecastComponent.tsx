import styles from "./Weather.module.scss";
import {
  useGetForecastQuery,
} from "@/app/redux/features/weatherSlice";

interface WeatherComponentProps {
  location: string;
}

interface Forecast {
  weather: [{
    icon: string,
  }],
  dt: number,
  main: { feels_like: number, humidity: number, pressure: number },
  wind: {speed: number},
}

export const ForecastComponent: React.FC<WeatherComponentProps> = ({location}) => {
  const {
    data = [],
    isLoading,
    isError,
  } = useGetForecastQuery(location);

  console.log(data);

  const imgUrl = "https://openweathermap.org/img/wn";

  const unixToDate = (unixDate: number) => {
    return new Date(unixDate * 1000).toISOString().split("T")[1].slice(0, 5);
  };

  return (
    <div className={styles.location__wrapper}>
          <div className={styles.location}>
            {data?.list?.map((item: Forecast, index: number) => {
              const {
                weather: [weatherData],
                dt,
                main: { feels_like, humidity, pressure } = {},
                wind,
              } = item;
              return (
                <div key={index} className={styles.location__bottom}>
                  <div className={styles.location__bottom_date}>
                    <img src={`${imgUrl}/${weatherData.icon}.png`} />
                    <p>{unixToDate(dt)}</p>
                  </div>
                  <p className={styles.temp}>{feels_like?.toFixed()}°C</p>
                  <p className={styles.humidity}>{humidity}%</p>
                  <p className={styles.speed}>{wind?.speed.toFixed()} м/с</p>
                  <p className={styles.pressure}>{pressure}</p>
                </div>
              );
            })}
          </div>
        </div>
  )
}