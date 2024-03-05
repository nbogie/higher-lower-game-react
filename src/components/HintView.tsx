import { Hint } from "../gameCore/gameState";
export function HintView({
    hint,
    lastGuess,
}: {
    hint: Hint | null;
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
