import './LinkItem.sass'
import { useDispatch } from 'react-redux'
import {
    UpVote,
    DownVote,
    RemoveLink
} from "../Reducers/LinksSlice";

export default function LinkItem(props) {
    const dispatch = useDispatch();
    const { id, link, point, title } = props.item;

    return (
        <div className="link-item">
            <div className="link-item__point">
                <div className="link-item__number">
                    {point}
                </div>
                POINTS
            </div>
            <div className="link-item__right">
                <div className="link-item__right-top">
                    <h2 className="link-item__right-title">
                        {title}
                    </h2>
                    <a href={link} target="_blank" rel="noreferrer" className="link-item__right-link">
                        ({link})
                    </a>
                </div>
                <div className="link-item__right-bot">
                    <button className="link-item__btn" onClick={() => dispatch(UpVote(id))}>
                        <i className="icon-arrow-up"></i> Up Vote
                    </button>
                    <button className="link-item__btn" onClick={() => dispatch(DownVote(id))}>
                        <i className="icon-arrow-down"></i> Down Vote
                    </button>
                </div>
            </div>
            <button className="link-item__remove-btn" onClick={() => dispatch(RemoveLink(id))}>
                -
            </button>
        </div>
    )
}