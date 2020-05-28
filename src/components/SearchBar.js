import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchkeyword} from "../redux/actions";

export const SearchBar = (props) => {
    const keyword = useSelector(state => state.playerReducer.keyword);
    const dispatch = useDispatch();

    return (
        <form>
            <input type="text" placeholder="search..."
                    value={keyword} onChange={(e) => dispatch(searchkeyword(e.target.value))}/>
        </form>
    )
}
