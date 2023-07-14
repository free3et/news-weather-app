import { useGetTopPostsQuery } from "@/app/redux/features/newsSlice";
import { TopNewsComponent } from "./TopNewsComponent";
import styles from "../News.module.scss";
import { Loader } from "../../Loader/Loader";
import { TopNews } from "../../types";
import { usePagination } from "../../Pagination/usePagination";
import { PaginationNav } from "../../Pagination/PaginationNav";
import '../../Pagination/Pagination.css'


export const TopNewsList = ({search}: { search: string}) => {
  const { data = [], isLoading, isError, isSuccess, error } = useGetTopPostsQuery(search);
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
    contentPerPage: 2,
    count: data?.num_results,
  });

  return (
    <>
      {isLoading && <Loader />}
      <div className="pagination">
        {totalPages > 0 && search === "" ? (
          <PaginationNav prevPage={prevPage} page={page} setPage={setPage} gaps={gaps} totalPages={totalPages} nextPage={nextPage}/>
        ) : null}
      </div>
      {search === "" && (
        <>
          <div className="row">
            <section className={`${styles.top} `}>
              {data?.results !== undefined &&
            isSuccess &&
            data?.results.slice(firstContentIndex, lastContentIndex).map((post: TopNews, index: number) => (
                  <TopNewsComponent post={post} key={index} className={`col-12 col-md-6 col-lg-6`} />
                ))}
            </section>
          </div>
        </>
      )}
    </>
  );
};
