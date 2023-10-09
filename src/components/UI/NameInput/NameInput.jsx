import React from 'react';
import classes from './NameInput.module.css'

const NameInput = (props) => {
    return (
        <input className={classes.NameInput} {...props}/>
    );
};

export default NameInput;