import { useGetAllPostsQuery } from "@/app/redux/features/newsSlice";
import { NewsComponent } from "./NewsComponent";
import styles from "./News.module.scss";
import { Loader } from "../Loader/Loader";
import { usePagination } from "../Pagination/usePagination";
import "../Pagination/Pagination.css";

export const NewsList = ({category, country, search}) => {
  const news = {
    category,
    country,
  };

  const { data = [], isLoading, isError, isSuccess, error } = useGetAllPostsQuery(news);

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
    contentPerPage: 6,
    count: data.response?.docs !== undefined ? data.response?.docs.length : null,
  });

  return (
    <>
      {isLoading && <Loader />}
      <div className="pagination">
        {totalPages > 0 && search === "" ? (
          <div className="pagination_nav">
            <button onClick={prevPage} className={`page ${page === 1}`}>
              &larr;
            </button>
            <button onClick={() => setPage(1)} className={`page ${page === 1}`}>
              1
            </button>
            {gaps.before ? "..." : null}

            {gaps.paginationGroup.map((el) => (
              <button
                onClick={() => setPage(el)}
                key={el}
                className={`page ${page === el ? "active" : ""}`}
              >
                {el}
              </button>
            ))}
            {gaps.after ? "..." : null}
            <button
              onClick={() => setPage(totalPages)}
              className={`page ${page === totalPages && "disabled"}`}
            >
              {totalPages}
            </button>
            <button onClick={nextPage} className={`page ${page === totalPages && "disabled"}`}>
              &rarr;
            </button>
          </div>
        ) : null}
      </div>
      <div className="row">
        <section className={styles.category}>
          {data.response?.docs !== undefined &&
            isSuccess &&
            search === "" &&
            data.response?.docs
              .slice(firstContentIndex, lastContentIndex)
              .map((post, index) => (
                <NewsComponent
                  post={post}
                  key={index}
                  className={`col-12 col-md-6 col-lg-6 col-xl-4`}
                />
              ))}
        </section>
      </div>
    </>
  );
};
