import { Dispatch } from "react";
import { GameState, selectGuesses } from "../gameCore/gameState";
import { GameAction } from "../reducer/reducerFunction";

export function GuessButtonsView({
    state,
    dispatch,
}: {
    state: GameState;
    dispatch: Dispatch<GameAction>;
}) {
    const guesses = selectGuesses(state);
    return (
        <div className="guessButtons">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
                <GuessButtonView key={num} {...{ num, guesses, dispatch }} />
            ))}
        </div>
    );
}

function GuessButtonView({
    num,
    guesses,
    dispatch,
}: {
    num: number;
    dispatch: Dispatch<GameAction>;
    guesses: number[];
}) {
    return (
        <button
            className="guessButton"
            disabled={guesses.includes(num)}
            onClick={() => dispatch({ type: "guess", guess: num })}
        >
            {num}
        </button>
    );
}
