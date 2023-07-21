import { GetLocation } from "../types";
import styles from "./Weather.module.scss";


export const InputGetLocationComponent: React.FC<GetLocation> = ({getLocation, location}) => {

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  return (
    <div className={styles.weather__search}>
      <form onSubmit={submitHandler}>
        <input
          className={styles.weather__input}
          value={location.charAt(0).toUpperCase() + location.slice(1)}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => getLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
        />
        </form>
      </div>
  );
};
