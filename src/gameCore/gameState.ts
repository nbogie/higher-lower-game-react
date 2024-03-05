export interface GameState {
    numberToGuess: number;
    guesses: number[];
}

export type Hint = "correct" | "higher" | "lower";

export function createInitialState(): GameState {
    return { numberToGuess: randomNumber(), guesses: [] };
}

export function selectGuesses(state: GameState): number[] {
    return state.guesses;
}

export function selectNumberToGuess(state: GameState): number {
    return state.numberToGuess;
}
export function selectLastGuessWasCorrect(state: GameState): boolean {
    return state.guesses.at(-1) === state.numberToGuess;
}

export function selectLastGuess(state: GameState): number | null {
    return state.guesses.at(-1) ?? null;
}

export function selectCurrentHint(state: GameState): Hint | null {
    const lastGuess = selectLastGuess(state);
    const numberToGuess = selectNumberToGuess(state);
    if (lastGuess === null || numberToGuess === null) {
        return null;
    }

    return calculateHint(lastGuess, numberToGuess);
}
export function calculateHint(guess: number, numberToGuess: number): Hint {
    if (guess === numberToGuess) {
        return "correct";
    }
    return guess > numberToGuess ? "lower" : "higher";
}

function randomNumber() {
    return Math.floor(Math.random() * 15) + 1;
}
