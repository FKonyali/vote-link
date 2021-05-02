import React from "react";
import LinkItem from "./LinkItem"
import { useSelector, useDispatch } from "react-redux";
import { selectPage, setPage } from "../Reducers/PaginationSlice";
import {
    selectLinks,
    selectSortOptions,
    selectPageCount,
} from "../Reducers/LinksSlice";
import { SortByProperty } from "../Helpers/SortByProperty";
import { SliceByPage } from "../Helpers/SliceByPage";

export default function Links() {
    const page = useSelector(selectPage);
    const links = useSelector(selectLinks);
    const sortOptions = useSelector(selectSortOptions);
    const pageCount = useSelector(selectPageCount);
    const dispatch = useDispatch();

    if (page > pageCount && page > 1) {
        dispatch(
            setPage({
                newPage: page - 1,
                pageCount: pageCount,
            })
        );
        return null;
    }

    const items = SliceByPage(SortByProperty(links, sortOptions), page).map(
        (link) => {
            return <LinkItem 
                        item={link} 
                        key={link.id} 
                    />;
        }
    );

    return <div>{items}</div>;
    // return links.length > 0 ? (
    //     return <div> { items } </div>
    // ) : (
    //     <div className="text-center">
    //         No found links
    //     </div>
    // );
};