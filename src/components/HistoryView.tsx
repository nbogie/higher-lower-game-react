import { Fragment } from "react";
import { SymbolForHint } from "./SymbolForHint";
import { Direction } from "../gameCore/gameState";

export function HistoryView({
    history,
}: {
    history: [number, Direction | null][];
}) {
    return (
        <div className="guesses">
            {history.map(([guess, hint], ix) => {
                return (
                    <Fragment key={ix}>
                        <div className="guess">{guess}</div>
                        <SymbolForHint hint={hint} />
                    </Fragment>
                );
            })}
        </div>
    );
}
