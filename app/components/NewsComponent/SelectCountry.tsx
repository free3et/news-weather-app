import styles from "./News.module.scss";

const countries: Countries = {
  ua: "Україна",
  us: "США",
  au: "Австралія",
  at: "Австрія",
  be: "Бельгія",
  br: "Бразилія",
  fr: "Франція",
  ca: "Канада",
  de: "Німеччина",
  gr: "Греція",
  jp: "Японія",
  nl: "Нідерланди",
  no: "Норвегія",
  pt: "Польща",
  ch: "Швейцарія",
  tr: "Турція",
  gb: "Великобританія",
};

type Countries = {
  [key: string]: string
}

export const SelectCountry = ({ getCountry }) => {
  return (
    <div className={`${styles.select_country} col-12 col-md-12 col-lg-6`}>
      <div className={styles.select_wrapper}>
        <select name="country" id="country" onChange={(e) => getCountry(e.target.value)}>
          {Object.entries(countries).map((key, value) => (
            <option value={key[0]} key={key[0]}>
              {key[1]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
