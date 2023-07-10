import styles from "./News.module.scss";
//import { useState } from "react";

const category: Category = {
  business: "business",
  entertainment: "entertainment",
  general: "general",
  health: "health",
  science: "science",
  sports: "sports",
  technology: "technology",
};

type Category = {
  [key: string]: string,
}

export const NewsNavigation = ({ getCategory }) => {
  //const [target, setTarget] = useState("");

  return (
    <div /* onClick={(e) => setTarget(e.target)} */ className={`${styles.news_navigation} col-lg-12`}>
      {Object.values(category).map((item, index) => (
        <a
          href={`#${item}`}
          key={index}
          onClick={() => getCategory(item)}
          /* className={target.innerText === item ? "active" : ""} */
        >
          {item}
        </a>
      ))}
    </div>
  );
};
