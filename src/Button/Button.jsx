import React from "react";

const Button = ({ onClickClear }) => {
    return (
        <div>
            <button onClick={onClickClear}>Clear All</button>
        </div>
    );
};

export default Button;
