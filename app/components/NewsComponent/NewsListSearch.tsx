import { useGetSearchPostsQuery } from "@/app/redux/features/newsSlice";
import styles from "./News.module.scss";
import { Loader } from "../Loader/Loader";
import { usePagination } from "../Pagination/usePagination";
import "../Pagination/Pagination.css";
import { NewsComponent } from "./NewsComponent";
import { Post } from "../types";
import { PaginationNav } from "../Pagination/PaginationNav";

export const NewsListSearch = ({search}: {search: string}) => {
  const { data = [], isLoading, isError, isSuccess, error } = useGetSearchPostsQuery(search);

  // Pagination
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 4,
    count: data?.response?.docs !== undefined ? data?.response?.docs.length : null,
  });

  return (
    <>
      {isLoading && <Loader />}
      <div className="pagination">
        {totalPages > 0 && search !== "" ? (
          <PaginationNav prevPage={prevPage} page={page} setPage={setPage} gaps={gaps} totalPages={totalPages} nextPage={nextPage}/>
        ) : null}
      </div>
      <div className="row">
    <section className={styles.search}>
          {data?.response?.docs !== undefined &&
            isSuccess &&
            data?.response?.docs
              .slice(firstContentIndex, lastContentIndex)
              .map((post: Post, index: number) => (
                <NewsComponent post={post} key={index} className={`col-12`} />
              ))}
        </section>
      </div>
    </>
  );
};