import React, { useState } from "react";
import "./App.css";

import Grid from "./grid/Grid";
import ColorPalette from "./palette/Palette";

function App() {
    const initialGridState = Array(30)
        .fill()
        .map(() => Array(30).fill(null));

    const [gridState, setGridState] = useState(initialGridState);
    const [selectedColor, setSelectedColor] = useState(null);

    const handleCellClick = (rowIndex, colIndex) => {
        if (selectedColor !== null) {
            const newGridState = [...gridState];
            newGridState[rowIndex][colIndex] = selectedColor;
            setGridState(newGridState);
        }
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleClearAll = () => {
        const clearedGridState = Array(30)
            .fill()
            .map(() => Array(30).fill("white"));
        setGridState(clearedGridState);
        setSelectedColor(null);
    };

    return (
        <div className="container">
            <div className="container">
                <ColorPalette onColorSelect={handleColorSelect} />
                <Grid gridState={gridState} onCellClick={handleCellClick} />
            </div>
            <button onClick={handleClearAll}>Clear All</button>
        </div>
    );
}

export default App;
