import styles from "../News.module.scss";
import UserAvatar from "../../../assets/news/user_avatar.png";
import Calendar from "../../../assets/news/calendar_date.png";
import Category from "../../../assets/news/category_icon.png";
import Image from "next/image";
import { NewsWithoutImage } from "../../types";

export const NewsByCategoryComponent = ({ post, className }: {post: NewsWithoutImage, className: string}) => {
  const { headline, abstract, pub_date, byline, web_url, section_name, subsection_name} = post;

  const formatDate = pub_date?.slice(0, -14).split("T").join(" ");
  return (
    <article className={`${styles.newsCard_wrap} ${className}`}>
       <div className={styles.newsCard_body}>
        <h3><a href={web_url}>{headline?.main}</a></h3>
        <p className={styles.description}>{abstract || "no description"}</p>
        <div className={styles.userInfo_wrapper}>
          <div className={`${styles.userName_info}`}>
            <Image src={UserAvatar} alt={headline?.main} width='100' height='100'/>
             <p>{Object.keys(byline) ? byline?.original : "no author"}</p>

          </div>
          <div className={styles.userDate_info}>
            <Image src={Calendar} alt={headline?.main} width='100' height='100'/>
            <p>{formatDate}</p>
          </div>
          <div className={styles.userDate_info}>
            <Image src={Category} alt={headline?.main} width='100' height='100'/>
            <p>{section_name} <span>{subsection_name ? `/ ${subsection_name}` : null} </span></p>
          </div>
        </div>
      </div>
    </article>
  );
};
