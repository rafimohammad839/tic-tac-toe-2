import React, {useEffect, useState} from 'react';
import Cell from "./components/Cell";

function App() {
    const [cells, setCells] = useState(["","","","","","","","",""]);
    const [go, setGo] = useState("circle");
    const [winningMessage, setWinningMessage] = useState(null);

    const message = "It is now " + go + " 's go.";

    const checkScore = () => {
        const winningCombos = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ]

        winningCombos.forEach(array => {
            let circleWins = array.every(cell => cells[cell] === "circle");

            if (circleWins) {
                setWinningMessage("Circle wins!");
                return;
            }
        })

        winningCombos.forEach(array => {
            let crossWins = array.every(cell => cells[cell] === "cross");

            if (crossWins) {
                setWinningMessage("Cross wins!");
                return;
            }
        })
    }

    useEffect(() => {
        checkScore();
    }, [cells])

    return (
        <div className="App">
            <h2>Tic Tac Toe</h2>
            <div className="game-board">
                {cells.map((cell, idx) => {
                    return (
                        <Cell
                            key={idx}
                            id={idx}
                            cell={cell}
                            go={go}
                            setGo={setGo}
                            setCells={setCells}
                            cells={cells}
                            winningMessage={winningMessage}
                        />
                    )
                })}
            </div>
            <p>{winningMessage || message}</p>
        </div>
    );
}

export default App;
