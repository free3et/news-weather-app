import styles from "./News.module.scss";
import UserAvatar from "../../assets/news/user_avatar.png";
import SourseNews from "../../assets/news/earth_internet_browser.png";
import Calendar from "../../assets/news/calendar_date.png";
import DefaultImg from "../../assets/news/default_image.jpg";

export const NewsComponent = ({ post, className }) => {
  const { title, description, publishedAt, author, source, url, urlToImage } = post;

  const formatDate = publishedAt.slice(0, -4).split("T").join(" ");
  return (
    <article className={`${styles.newsCard_wrap} ${className}`}>
      <div className={styles.newsCard_thumb_img}>
        <img src={urlToImage || DefaultImg} alt={title} />
      </div>
      <div className={styles.newsCard_body}>
        <h3>{title}</h3>
        <p className={styles.description}>{description || "no description"}</p>
        <div className={styles.userInfo_wrapper}>
          <div className={`${styles.userName_info}`}>
            <img src={UserAvatar} alt={title} />
            <p>{author || "no author"}</p>
          </div>
          <div className={`${styles.sourceNews_info}`}>
            <img src={SourseNews} alt={title} />
            <a href={url}>{source.name.toLowerCase()}</a>
          </div>

          <div className={styles.userDate_info}>
            <img src={Calendar} alt={title} />
            <p>{formatDate}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
