import React from "react";
import Cell from "../cell/Cell";

function Grid({ gridState, onCellClick }) {
    return (
        <div className="container">
            {gridState.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((color, colIndex) => (
                        <Cell
                            key={colIndex}
                            color={color}
                            onClick={() => onCellClick(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Grid;
