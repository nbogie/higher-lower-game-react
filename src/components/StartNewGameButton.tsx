import { Dispatch } from "react";
import { GameState } from "../gameCore/gameState";
import { GameAction } from "../reducer/reducerFunction";

export function StartNewGameButton({
    dispatch,
}: {
    state: GameState;
    dispatch: Dispatch<GameAction>;
}) {
    function startNewGame() {
        dispatch({ type: "startNewGame" });
    }

    return (
        <button className="startNewGameButton" onClick={startNewGame}>
            Start New Game
        </button>
    );
}
