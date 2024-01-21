// components/ColorPalette.js

import React from "react";

const colors = ["black", "red", "blue", "yellow", "gray", "green"];

function ColorPalette({ onColorSelect }) {
    return (
        <div className="palette">
            {colors.map((color) => (
                <div
                    key={color}
                    className="color"
                    style={{ backgroundColor: color }}
                    onClick={() => onColorSelect(color)}
                ></div>
            ))}
        </div>
    );
}

export default ColorPalette;
