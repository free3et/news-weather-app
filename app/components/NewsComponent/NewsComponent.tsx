import styles from "./News.module.scss";
import UserAvatar from "../../assets/news/user_avatar.png";
import SourseNews from "../../assets/news/earth_internet_browser.png";
import Calendar from "../../assets/news/calendar_date.png";
import DefaultImg from "../../assets/news/default_image.jpg";
import Image from "next/image";

export const NewsComponent = ({ post, className }) => {
  const { title, description, publishedAt, author, source, url, urlToImage } = post;
  const externaImageLoader = ( urlToImage: string ) : string =>
  `${urlToImage}`;


  const formatDate = publishedAt.slice(0, -4).split("T").join(" ");
  return (
    <article className={`${styles.newsCard_wrap} ${className}`}>
      {/* <div className={styles.newsCard_thumb_img}>
        <Image loader={externaImageLoader} src={urlToImage} alt={title} width='100' height='100' priority/>
      </div> */}
       <div className={styles.newsCard_body}>
        <h3>{title}</h3>
        <p className={styles.description}>{description || "no description"}</p>
        <div className={styles.userInfo_wrapper}>
          <div className={`${styles.userName_info}`}>
            <Image src={UserAvatar} alt={title} width='100' height='100'/>
             <p>{author || "no author"}</p>
          </div>
          <div className={`${styles.sourceNews_info}`}>
            <Image src={SourseNews} alt={title} width='100' height='100'/>
            <a href={url}>{source.name.toLowerCase()}</a>
          </div>

          <div className={styles.userDate_info}>
            <Image src={Calendar} alt={title} width='100' height='100'/>
            <p>{formatDate}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
