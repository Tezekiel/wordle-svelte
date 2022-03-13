import { writable } from 'svelte/store'
import { findLastIndex } from "../utils/arrays";
import { get } from 'svelte/store';
import { CharState } from "../components/model/types";
import { validateRow, maybeResetGame, updateCharState } from "./usecase";
import { Validation } from "./usecase/validateRow/validateRow";
import { emptyGame } from "./constants/empty-game";
import { saveGame, getStoredGame } from "./storage/storedGame";
import type { Game, InputRow } from './types/types';
import { updateKeyState } from "./key-states";

maybeResetGame()
export const gameStore = writable<Game>(getStoredGame() ?? emptyGame)
gameStore.subscribe((game) => {
    saveGame(game);
  }
)

function onValidation(row: InputRow, rowIndex: number) {
  const validationResult = validateRow(row)
  switch (validationResult) {
    case Validation.OK:
      const newRow = updateChars(row)
      gameStore.update((currentState) => {
        currentState.rows[rowIndex] = newRow
        currentState.rows[rowIndex + 1] = {current: true, done: false, chars: new Array(5)}
        return currentState
      })
      break;
    default:
      return validationResult
  }

}

const saveRowOrError = () => {
  const row = get(gameStore).rows.find((row) => row.current)
  const rowIndex = get(gameStore).rows.findIndex((row) => row.current)
  return onValidation(row, rowIndex);
}

const updateLetter = (letter: string) => {
  gameStore.update((currentState) => {
    const freeRowIndex = currentState.rows.findIndex((row) => row.current)
    const freeLetterIndex = currentState.rows[freeRowIndex].chars.findIndex((letter) => !letter)
    currentState.rows[freeRowIndex].chars[freeLetterIndex] = {char: letter, state: CharState.NONE}
    return currentState
  })
}

const deleteLetter = () => {
  gameStore.update((currentState) => {
    const freeRowIndex = currentState.rows.findIndex((row) => row.current)
    const lastLetterIndex = findLastIndex(
      currentState.rows[freeRowIndex].chars,
      (letter) => Boolean(letter)
    )
    currentState.rows[freeRowIndex].chars[lastLetterIndex] = undefined
    return currentState
  })
}

const updateChars = (row: InputRow): InputRow => {
  const newRow = {...row}.chars.map((char, i) => {
    const newChar = updateCharState(char, i)
    updateKeyState(newChar)
    return newChar
  })
  return {current: false, done: true, chars: newRow}
}


export const resolveUserInput = (key: string) => {
  if (key === 'BACK') {
    deleteLetter()
  } else if (key === 'ENTER') {
    return saveRowOrError()
  } else {
    updateLetter(key)
  }
}
