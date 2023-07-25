import styles from './News.module.scss';

const category: Categories = {
  business: 'Business Day',
  education: 'education',
  world: 'world',
  health: 'health',
  science: 'science',
  sports: 'sports',
  technology: 'technology',
};

type Categories = {
  [key: string]: string;
};

type GetCategory = {
  getCategory: (item: string) => void;
};

export const NewsCategoryNavigation = ({ getCategory }: GetCategory) => {
  return (
    <div className={`${styles.news_navigation} col-lg-12`}>
      {Object.values(category).map((item, index) => (
        <a href={`#${item}`} key={index} onClick={() => getCategory(item)}>
          {item}
        </a>
      ))}
    </div>
  );
};
