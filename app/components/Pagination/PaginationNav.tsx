import { Gaps, UsePaginationReturn } from "../types";

export const PaginationNav = ({prevPage, page, setPage, gaps, totalPages, nextPage}: UsePaginationReturn) => {
  return (
    <>
    {totalPages > 0 ? (
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
          </>
  )
}