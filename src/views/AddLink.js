import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddLink } from "../Reducers/LinksSlice";
import "./AddLink.sass"

function AddLinkFunc() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [links, setLinks] = useState({});
    const [disabled, setDisabled] = useState(true);


    function addNewLink() {
        dispatch(AddLink({ 
            title: links.title,
            point: 0,
            link: links.link
        }));
        history.push("/");
    }

    function inputChange(e) {
        const name = e.target.name;
        const link = e.target.value;
        let obj = {
            ...links,
            [name]: link
        };

        if ((obj.title && obj.title.trim().length > 0) && (obj.link && obj.link.trim().length > 0)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

        setLinks(obj);
    }

    return (
        <div className="add-link">
            <Link to="/" className="add-link__back">
                ﹤ Return to List
            </Link>
            <h1 className="add-link__title">
                Add New Link
            </h1>
            <div className="form__group">
                <label to="name" htmlFor="title">Link Name:</label>
                <input id="title" type="text" name="title" className="form__control" placeholder="e.g. Alphabet" onChange={(e) => inputChange(e)} />
            </div>
            <div className="form__group">
                <label to="name" htmlFor="link">Link URL:</label>
                <input id="link" type="text" name="link" className="form__control" placeholder="e.g. http://abc.xyz" onChange={(e) => inputChange(e)} />
            </div>
            <div className="form__group text-right">
                <button className="btn" onClick={() => addNewLink()} disabled={disabled}>
                    ADD
                </button>
            </div>
        </div>
    )
}

export default AddLinkFunc;