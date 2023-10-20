import React, {useState} from 'react';
import classes from './Cell.module.css';

const Cell = () => {

    const [value, setValue] = useState(0)

    const cellSvg = {
        //empty cell
        0 : <></>,

        //ship cell
        1:  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 300 300">
                <path fill="none" stroke="black" strokeWidth="2"
                      d="M150 50C95 50 50 95 50 150 50 205 95 251
                      150 251 205 251 251 205 251 150 251 95 205
                      50 150 50zM150 51C205 51 250 95 250 150 250
                      205 205 250 150 250 95 250 51 205 51 150 51
                      95 95 51 150 51z"/>
            </svg>,

        //wrecked ship cell
        2: <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045
                  14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222
                  14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686
                  1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727
                  10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358
                  5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358
                  9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173
                  10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173
                  10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292
                  7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173
                  4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173
                  4.95118 9.65832 4.95118 9.85358 5.14644Z" fill="red"/>
            </svg>
    }

    const handleClick = () =>{
        setValue(1)
    }

    return (
        <div className={classes.Cell}
             onClick={handleClick}
        >
            {
                cellSvg[value]
            }
        </div>
    );
};

export default Cell;