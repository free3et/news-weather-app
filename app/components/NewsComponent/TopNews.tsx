import { useGetTopPostsQuery } from "@/app/redux/features/newsSlice";
import { NewsComponent } from "./NewsComponent";
import styles from "./News.module.scss";
import { Loader } from "../Loader/Loader";
import { Post } from "./types";

export const TopNews = ({search}: { search: string}) => {
  const { data = [], isLoading, isError, isSuccess, error } = useGetTopPostsQuery(search);

  return (
    <>
      {isLoading && <Loader />}
      {search === "" && (
        <>
          <div className="row">
            <section className={`${styles.top} `}>
              {data.results !== undefined &&
                isSuccess &&
                data.results.map((post: Post, index: number) => (
                  <NewsComponent post={post} key={index} className={`col-12 col-md-6 col-lg-6`} />
                ))}
            </section>
          </div>
        </>
      )}
    </>
  );
};
