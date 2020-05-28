import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";
import PropTypes from "prop-types";

const Header = ({players, title}) => {
    // const {players, title} = props;
    return(
        <header className="header">
            <Stats players={players} />
            <h1 className="h1">{title}</h1>
            <Stopwatch/>
        </header>
    )
};

Header.defaultProps = {
    title: 'scoreboard'
}

Header.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
}

export default Header;
