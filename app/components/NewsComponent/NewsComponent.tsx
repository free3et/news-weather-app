import styles from "./News.module.scss";
import UserAvatar from "../../assets/news/user_avatar.png";
import SourseNews from "../../assets/news/earth_internet_browser.png";
import Calendar from "../../assets/news/calendar_date.png";
import DefaultImg from "../../assets/news/default_image.jpg";
import Image from "next/image";
import { Post } from "../types";

export const NewsComponent = ({ post, className }: {post: Post, className: string}) => {
  const { title, abstract, published_date, pub_date, byline, source, web_url, snippet, media } = post;
  const externaImageLoader = ( urlToImage: string ) : string =>
  `${urlToImage}`;

  //const formatDate = publishedAt.slice(0, -4).split("T").join(" ");
  return (
    <article className={`${styles.newsCard_wrap} ${className}`}>

       <div className={styles.newsCard_body}>
        <h3>{title || snippet}</h3>
        <p className={styles.description}>{abstract || "no description"}</p>
        <div className={styles.userInfo_wrapper}>
          <div className={`${styles.userName_info}`}>
            <Image src={UserAvatar} alt={title} width='100' height='100'/>
             <p>{typeof byline === 'string' ? byline /* : typeof byline === 'object' ? byline?.original */ : "no author"}</p>

          </div>
          <div className={`${styles.sourceNews_info}`}>
            <Image src={SourseNews} alt={title} width='100' height='100'/>
            <a href={web_url || source } target="_blank">{ source}</a>
          </div>

          <div className={styles.userDate_info}>
            <Image src={Calendar} alt={title} width='100' height='100'/>
            <p>{published_date || pub_date}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
