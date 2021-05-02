import React from "react";
import "./Pagination.sass"
import { useSelector, useDispatch } from "react-redux";
import { selectPageCount } from "../Reducers/LinksSlice";
import {
    incrementPage,
    decrementPage,
    setPage,
    selectPage,
} from "../Reducers/PaginationSlice";

function Pagination(props) {
    const dispatch = useDispatch();
    let activePage = useSelector(selectPage);
    let pageCount = useSelector(selectPageCount);

    let pages = [...Array(pageCount)].map((_, index) => (
        <button
            key={index}
            className={
                "pagination__btn" +
                (index + 1 === activePage ? " is-active" : "")
            }
            onClick={() =>
                dispatch(setPage({ newPage: index + 1, pageCount: pageCount }))
            }
        >
            {index + 1}
        </button>
    ));
    return pageCount > 0 ? (
        <div className="pagination">
            <button className="pagination__btn" onClick={() => dispatch(decrementPage())}>
                ﹤
            </button>
            {pages}
            <button className="pagination__btn" onClick={() => dispatch(incrementPage(pageCount))}>
                ﹥
            </button>
        </div>
    ) : ('');
}

export default React.memo(Pagination);