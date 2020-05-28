import React from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {removePlayer} from "../redux/actions";

function Player (props) {
    /*componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate', nextProps);
        return nextProps.score !== this.props.score;
    }*/

    /*static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        index: PropTypes.number,
        removePlayer: PropTypes.func,
        changeScore: PropTypes.func
    }*/



    // console.log(this.props.name, ' rendered');
    const {id, name, score, index, changeScore} = props;
    const dispatch = useDispatch();

    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => {dispatch(removePlayer(id))}}>X</button>
                {props.children}
                {name}
            </span>
            <Counter score={score} index={index} changeScore={changeScore} />
        </div>
    )
};

export default Player;
