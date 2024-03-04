import { calculateHint, symbolForHint } from "./HigherLowerGame";

export function Guesses({
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
                    <>
                        <div className="guess">{guess}</div>
                        <div className="hintSymbol">{symbolForHint(hint)}</div>
                    </>
                );
            })}
        </div>
    );
}
