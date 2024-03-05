import { Fragment } from "react";
import { calculateHint } from "../gameCore/gameState";
import { SymbolForHint } from "./SymbolForHint";

export function GuessesView({
    guesses,
    numberToGuess,
}: {
    guesses: number[];
    numberToGuess: number;
}) {
    return (
        <div className="guesses">
            {guesses.map((guess) => {
                const hint = calculateHint(guess, numberToGuess);

                return (
                    <Fragment key={guess}>
                        <div className="guess">{guess}</div>
                        <SymbolForHint hint={hint} />
                    </Fragment>
                );
            })}
        </div>
    );
}
