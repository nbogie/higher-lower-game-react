import { useReducer } from "react";
import {
    createInitialState,
    selectCurrentHint,
    selectGuesses,
    selectLastGuess,
    selectNumberToGuess,
} from "../gameCore/gameState";
import { reducerFunction } from "../reducer/reducerFunction";
import { HintView } from "./HintView";
import { GuessesView } from "./GuessesView";
import { GuessButtonsView } from "./GuessButtonsView";
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
            <StartNewGameButton state={state} dispatch={dispatch} />
        </div>
    );
}
