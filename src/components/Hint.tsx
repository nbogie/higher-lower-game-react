export function Hint({
    hint,
    lastGuess,
}: {
    hint: "correct" | "higher" | "lower" | null;
    lastGuess: number | null;
}) {
    if (hint === null || lastGuess === null) {
        return null;
    }
    return (
        <div className={"higherLowerIndicator"}>
            {hint !== "correct" ? `${hint} than ${lastGuess}` : "Correct!"}
        </div>
    );
}
