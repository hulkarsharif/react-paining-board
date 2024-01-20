// components/Cell.js

import React from "react";

function Cell({ color, onClick }) {
    const style = {
        backgroundColor: color
    };

    return <div className="cell" style={style} onClick={onClick}></div>;
}

export default Cell;
