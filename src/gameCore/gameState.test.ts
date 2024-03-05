import { GameAction, reducerFunction } from "../reducer/reducerFunction";
import { GameState, createInitialState, selectNoScrewUps } from "./gameState";
import { it, expect } from "vitest";

it("should detect game loss", () => {
    const gs1 = createInitialState(4);

    gs1.drawDeck = [10, 2, 1];
    expect(gs1.drawDeck).toEqual([10, 2, 1]); //check it was mutated

    const actions: GameAction[] = [
        { type: "guess", direction: "lower" },
        { type: "guess", direction: "higher" },
    ];

    const finalState = applyActions(actions, gs1);
    expect(selectNoScrewUps(finalState)).toBe(false);
});

function applyActions(
    actions: GameAction[],
    initialState: GameState
): GameState {
    return actions.reduce(
        (state, action) => reducerFunction(state, action),
        initialState
    );
}
