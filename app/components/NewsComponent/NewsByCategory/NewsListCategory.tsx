import { useGetAllPostsQuery } from '@/app/redux/features/newsSlice';
import { NewsByCategoryComponent } from './NewsByCategoryComponent';
import styles from '../News.module.scss';
import { Loader } from '../../Loader/Loader';
import { usePagination } from '../../Pagination/usePagination';
import '../../Pagination/Pagination.css';
import { NewsWithoutImage } from '../../types';
import { PaginationNav } from '../../Pagination/PaginationNav';

export const NewsListCategory = ({
  category,
  search,
}: {
  category: string;
  search: string;
}) => {
  const { data = [], isLoading, isError } = useGetAllPostsQuery(category);

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
    count:
      data?.response?.docs !== undefined ? data?.response?.docs.length : null,
  });

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <div>
          <h1>error</h1>
        </div>
      )}
      <div className='pagination'>
        {totalPages > 0 && search === '' ? (
          <PaginationNav
            prevPage={prevPage}
            page={page}
            setPage={setPage}
            gaps={gaps}
            totalPages={totalPages}
            nextPage={nextPage}
          />
        ) : null}
      </div>
      <div className='row'>
        <section className={styles.category}>
          {data?.response?.docs &&
            search === '' &&
            data.response?.docs
              .slice(firstContentIndex, lastContentIndex)
              .map((post: NewsWithoutImage, index: number) => (
                <NewsByCategoryComponent
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
