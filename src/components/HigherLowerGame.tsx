import { useState } from "react";
import { Hint } from "./Hint";
import { Guesses } from "./Guesses";

function randomNumber() {
    return Math.floor(Math.random() * 15) + 1;
}
export function HigherLowerGame() {
    const [numberToGuess, setNumberToGuess] = useState(randomNumber());
    const [guesses, setGuesses] = useState<number[]>([]);

    const lastGuess = guesses.at(-1) ?? null;

    const hint = calculateHint(lastGuess, numberToGuess);

    function handleGuessClicked(n: number) {
        if (hint === "correct") return;
        setGuesses([...guesses, n]);
    }

    function startNewGame() {
        if (hint !== "correct") {
            return;
        }
        setNumberToGuess(randomNumber());
        setGuesses([]);
    }

    return (
        <div className="game">
            <div className="buttons">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                    (n) => (
                        <button
                            disabled={guesses.includes(n)}
                            key={n}
                            onClick={() => handleGuessClicked(n)}
                        >
                            {n}
                        </button>
                    )
                )}
            </div>
            <Hint lastGuess={lastGuess} hint={hint} />

            <Guesses guesses={guesses} numberToGuess={numberToGuess} />
            <button onClick={startNewGame}>Start New Game</button>
        </div>
    );
}

export function calculateHint(lastGuess: number | null, numberToGuess: number) {
    if (lastGuess === null) {
        return null;
    }
    if (lastGuess === numberToGuess) {
        return "correct";
    }
    return lastGuess > numberToGuess ? "lower" : "higher";
}

export function symbolForHint(hint: string | null): string {
    if (hint === "correct") {
        return "✅";
    }
    return hint === "lower" ? "⬇️" : "⬆️";
}
