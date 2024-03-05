import { Fragment } from "react";
import { GuessAndHint } from "../gameCore/gameState";
import { SymbolForHint } from "./SymbolForHint";

export function GuessesView({
    guessesWithHints,
}: {
    guessesWithHints: GuessAndHint[];
}) {
    return (
        <div className="guesses">
            {guessesWithHints.map(([guess, hint]) => {
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
