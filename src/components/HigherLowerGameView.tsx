import { useReducer } from "react";
import {
    createInitialState,
    selectCurrentHint,
    selectGuesses,
    selectIsGameOver,
    selectLastGuess,
    selectNumberToGuess,
} from "../gameCore/gameState";
import { reducerFunction } from "../reducer/reducerFunction";
import { GuessButtonsView } from "./GuessButtonsView";
import { GuessesView } from "./GuessesView";
import { HintView } from "./HintView";
import { StartNewGameButton } from "./StartNewGameButton";

export function HigherLowerGameView() {
    const [state, dispatch] = useReducer(reducerFunction, createInitialState());

    return (
        <div className="game">
            <GuessButtonsView state={state} dispatch={dispatch} />

            <HintView
                lastGuess={selectLastGuess(state)}
                hint={selectCurrentHint(state)}
            />

            <GuessesView
                guesses={selectGuesses(state)}
                numberToGuess={selectNumberToGuess(state)}
            />
            {selectIsGameOver(state) && (
                <StartNewGameButton state={state} dispatch={dispatch} />
            )}
        </div>
    );
}
