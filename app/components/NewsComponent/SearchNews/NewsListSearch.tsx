import { useGetSearchPostsQuery } from "@/app/redux/features/newsSlice";
import styles from "../News.module.scss";
import { Loader } from "../../Loader/Loader";
import { usePagination } from "../../Pagination/usePagination";
import "../../Pagination/Pagination.css";
import { NewsByCategoryComponent } from "../NewsByCategory/NewsByCategoryComponent";
import { NewsWithoutImage } from "../../types";
import { PaginationNav } from "../../Pagination/PaginationNav";

export const NewsListSearch = ({search}: {search: string}) => {
  const { data = [], isLoading, isError } = useGetSearchPostsQuery(search);

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
    count: data?.response?.docs.length,
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
          {!isError && data?.response?.docs &&
            data?.response?.docs
              .slice(firstContentIndex, lastContentIndex)
              .map((post: NewsWithoutImage, index: number) => (
                <NewsByCategoryComponent post={post} key={index} className={`col-12`} />
              ))}
        </section>
        {!data?.response?.docs.length && (
          <section className={styles.search}>
            <h3>Sorry, but nothing was found there. Please try another search term</h3>
          </section>
        )}
      </div>
    </>
  );
};