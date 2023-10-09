import React from 'react';

const GameButton = ({children, ...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default GameButton;