import styles from "./Weather.module.scss";
import { useGetWeatherQuery } from "@/app/redux/features/weatherSlice";

interface WeatherComponentProps {
  location: string;
}

interface Weather {
  name: string;
  weather: [
    {
      icon: string,
      description: string,
    }
  ];
  dt: number;
  main: { feels_like: number, humidity: number, pressure: number, temp: number };
  wind: { speed: number };
}

export const WeatherComponent: React.FC<WeatherComponentProps> = ({ location }) => {
  const imgUrl = "https://openweathermap.org/img/wn";

  const {
    data = [],
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetWeatherQuery(location);
  console.log(data);

  const {name, weather: [weatherData], dt, main: { temp, feels_like, humidity, pressure }, wind: { speed }} = data as Weather;

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.location__top}>
          <div className={styles.location__header}>
            <p className={styles.location__header_title}>{name}</p>
          </div>
          <>
            <img
              className={styles.location__img}
              src={`${imgUrl}/${
                weatherData ? weatherData.icon : "01d"
              }@2x.png`}
            />
          </>
          <div className={styles.location__top_temp}>
           <p>{temp.toFixed()}°C</p>
          </div>
        </div>
        <div className={styles.location__bot}>
          <div className={styles.location__bot_desc}>
            <p>{weatherData.description}</p>
          </div>
          <div className={styles.location__bot_feels}>
           <p>{feels_like?.toFixed()}°C</p>
          </div>
          <div className={styles.location__bot_humidity}>
           <p>{humidity} %</p>
          </div>
          <div className={styles.location__bot_speed}>
          <p>{speed.toFixed()} м/с</p>
          </div>
          <div className={styles.location__bot_pressure}>
           <p>{pressure}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
