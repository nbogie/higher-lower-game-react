import {
    GameState,
    selectLastGuessWasCorrect,
    createInitialState,
} from "../gameCore/gameState";

export type GameAction =
    | { type: "guess"; guess: number }
    | { type: "startNewGame" };

export function reducerFunction(
    state: GameState,
    action: GameAction
): GameState {
    switch (action.type) {
        case "guess": {
            if (selectLastGuessWasCorrect(state)) state;
            return { ...state, guesses: [...state.guesses, action.guess] };
        }
        case "startNewGame": {
            if (!selectLastGuessWasCorrect(state)) {
                return state;
            }
            return createInitialState();
        }
    }
    return state;
}
