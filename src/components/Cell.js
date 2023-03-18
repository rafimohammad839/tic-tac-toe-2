import React from "react";

const Cell = ({ id, cell, go, setGo, setCells, cells, winningMessage }) => {
    const handleClick = (e) => {
        if (winningMessage) return;
        const taken = e.target.classList.contains("circle") ||
            e.target.classList.contains("cross");

        if (!taken) {
            if (go === "circle") {
                e.target.firstChild.classList.add("circle");
                setGo("cross");
                handleChange("circle");
            }
            if (go === "cross") {
                e.target.firstChild.classList.add("cross");
                setGo("circle");
                handleChange("cross");
            }
        } else {
            return;
        }
    }

    const handleChange = (className) => {
        const nextCells = cells.map((cell, index) => {
            if (id === index) {
                return className;
            } else {
                return cell;
            }
        })
        setCells(nextCells);
    }

    return (
        <div className="square" id={id} onClick={handleClick}>
            <div className={cell}></div>
        </div>
    )
}

export default Cell;