import React from "react";
import "./LinksOrder.sass"
import { useSelector, useDispatch } from "react-redux";
import {
    SetSortOptions,
    selectSortOptions,
} from "../Reducers/LinksSlice";

export default function LinksOrder(props) {
    const sortOptions = useSelector(selectSortOptions);
    const dispatch = useDispatch();

    return (
        <div className="link-container">
            <select
                className="order"
                name="order"
                defaultValue={'' ?? sortOptions.reverseSort}
                onChange={(e) =>
                    dispatch(
                        SetSortOptions({
                            sortProperty: "vote",
                            reverseSort: e.target.value === "true",
                        })
                    )
                }
            >
                <option value="" disabled>
                    Order by
                </option>
                <option value="false">
                    Most Voted
                </option>
                <option value="true">
                    Less Voted
                </option>
            </select>
        </div>
    )
}