import styles from '../News.module.scss';
import UserAvatar from '../../../assets/news/user_avatar.png';
import Calendar from '../../../assets/news/calendar_date.png';
import DefaultImg from '../../../assets/news/default_image.jpg';
import Image from 'next/image';
import { TopNews } from '../../types';

export const TopNewsComponent = ({
  post,
  className,
}: {
  post: TopNews;
  className: string;
}) => {
  const { title, abstract, published_date, byline, url, media } = post;

  const urlToImg = media?.map((item) => {
    let imgSrc = '';
    const getMetadata = Object.entries(item).filter(([key, value]) => {
      if (key === 'media-metadata') {
        return value;
      }
    });

    getMetadata[0].map((item) => {
      if (Array.isArray(item)) {
        item.filter((el, index) => {
          if (index === 2) imgSrc = el.url;
          return imgSrc;
        });
      }
    });

    return imgSrc;
  });

  const [imgUrl] = urlToImg;

  return (
    <article className={`${styles.newsCard_wrap} ${className}`}>
      <div className={styles.newsCard_thumb_img}>
        <Image
          src={post?.media?.length && imgUrl ? imgUrl : DefaultImg}
          alt={title}
          width='360'
          height='230'
        />
      </div>
      <div className={styles.newsCard_body}>
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p className={styles.description}>{abstract || 'no description'}</p>
        <div className={styles.userInfo_wrapper}>
          <div className={`${styles.userName_info}`}>
            <Image src={UserAvatar} alt={title} width='100' height='100' />
            <p>{byline || 'no author'}</p>
          </div>
          <div className={styles.userDate_info}>
            <Image src={Calendar} alt={title} width='100' height='100' />
            <p>{published_date}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
