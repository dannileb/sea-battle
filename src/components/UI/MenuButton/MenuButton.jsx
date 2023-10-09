import React from 'react';
import classes from './MenuButton.module.css'
import {Link} from "react-router-dom";

const MenuButton = ({gameMode, ...props}) => {
    const gameModes = {
        queue: "Ходить по очереди",
        byMiss: "Ходить до промаха"
    }

    return (
        <button {...props} className={classes.MenuButton}>
            <Link to={"/fight?gamemode="+gameMode}>
                {gameModes[gameMode]}
            </Link>
        </button>
    );
};

export default MenuButton;