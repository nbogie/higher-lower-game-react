export function SymbolForHint({ hint }: { hint: string | null }): JSX.Element {
    function stringSymbolForHint(hint: string | null): string {
        if (hint === "correct") {
            return "✅";
        }
        return hint === "lower" ? "⬇️" : "⬆️";
    }
    return <div className="hintSymbol">{stringSymbolForHint(hint)}</div>;
}
