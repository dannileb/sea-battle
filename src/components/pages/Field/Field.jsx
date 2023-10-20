import React, {useState} from 'react';
import classes from './Field.module.css';
import Cell from "../Cell/Cell";

const Field = () => {

    const field = Array(100).fill(0);

    return (
        <div className={classes.Container}>
            {field.map((cell, index) =>
                <Cell key={index+1} />
            )}
        </div>
    );
};

export default Field;