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
      <div className={styles.newsCard_thumb_img}>
        <Image src={DefaultImg || Calendar} alt={title || snippet} />
      </div>
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
/* [
  {
      "uri": "nyt://article/6c93c5c6-254a-56da-b9ef-2a2c0c28d7ef",
      "url": "https://www.nytimes.com/2023/07/10/science/titan-submersible-map-titanic.html",
      "id": 100000008989939,
      "asset_id": 100000008989939,
      "source": "New York Times",
      "published_date": "2023-07-10",
      "updated": "2023-07-11 16:01:49",
      "section": "Science",
      "subsection": "",
      "nytdsection": "science",
      "adx_keywords": "Maps;Submarines and Submersibles;Titanic (Ship);Shipwrecks (Historic);Maritime Accidents and Safety;Salvage;your-feed-science;internal-sub-only-except-search;Nargeolet, Paul-Henri (1946-2023);RMS Titanic Inc;OceanGate Expeditions (Argus Expeditions Ltd)",
      "column": null,
      "byline": "By William J. Broad",
      "type": "Article",
      "title": "New Map Shows Titan Submersible Debris’s Proximity to Titanic Wreck",
      "abstract": "The map, released in a legal filing by a company with salvage rights to the famous ship, aided the hunt for the missing craft.",
      "des_facet": [
          "Maps",
          "Submarines and Submersibles",
          "Titanic (Ship)",
          "Shipwrecks (Historic)",
          "Maritime Accidents and Safety",
          "Salvage",
          "your-feed-science",
          "internal-sub-only-except-search"
      ],
      "org_facet": [
          "RMS Titanic Inc",
          "OceanGate Expeditions (Argus Expeditions Ltd)"
      ],
      "per_facet": [
          "Nargeolet, Paul-Henri (1946-2023)"
      ],
      "geo_facet": [],
      "media": [
          {
              "type": "image",
              "subtype": "photo",
              "caption": "The map shows how close the Titan submersible was to the Titanic debris field.",
              "copyright": "RMS Titanic Inc.",
              "approved_for_syndication": 1,
              "media-metadata": [
                  {
                      "url": "https://static01.nyt.com/images/2023/07/10/science/00titan-sub/00titan-sub-thumbStandard-v2.jpg",
                      "format": "Standard Thumbnail",
                      "height": 75,
                      "width": 75
                  },
                  {
                      "url": "https://static01.nyt.com/images/2023/07/10/science/00titan-sub/00titan-sub-mediumThreeByTwo210.jpg",
                      "format": "mediumThreeByTwo210",
                      "height": 140,
                      "width": 210
                  },
                  {
                      "url": "https://static01.nyt.com/images/2023/07/10/science/00titan-sub/00titan-sub-mediumThreeByTwo440.jpg",
                      "format": "mediumThreeByTwo440",
                      "height": 293,
                      "width": 440
                  }
              ]
          }
      ],
      "eta_id": 0
  },

] */