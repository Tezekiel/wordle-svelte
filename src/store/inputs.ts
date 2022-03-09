import { writable } from 'svelte/store'
import { findLastIndex } from "../utils/arrays";
import { get } from 'svelte/store';
import { CharState } from "../components/model/types";
import { validateRow, updateChars } from "./usecase";
import { Validation } from "./usecase/validateRow/validateRow";

export interface Inputs {
  rows: InputRow[]
}

export interface InputRow {
  current: boolean,
  done: boolean,
  chars: InputChar[]
}

export interface InputChar {
  char?: string,
  state?: CharState
}

export const InputsStore = writable<Inputs>(
  {
    rows: [
      {current: true, done: false, chars: new Array(5)},
      {current: false, done: false, chars: new Array(5)},
      {current: false, done: false, chars: new Array(5)},
      {current: false, done: false, chars: new Array(5)},
      {current: false, done: false, chars: new Array(5)},
      {current: false, done: false, chars: new Array(5)}
    ]
  }
)

function onValidation(row: InputRow, rowIndex: number) {
  const validationResult = validateRow(row)
  switch (validationResult) {
    case Validation.OK:
      const newRow = updateChars(row)
      InputsStore.update((currentState) => {
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
  const row = get(InputsStore).rows.find((row) => row.current)
  const rowIndex = get(InputsStore).rows.findIndex((row) => row.current)
  return onValidation(row, rowIndex);
}

const updateLetter = (letter: string) => {
  InputsStore.update((currentState) => {
    const freeRowIndex = currentState.rows.findIndex((row) => row.current)
    const freeLetterIndex = currentState.rows[freeRowIndex].chars.findIndex((letter) => !letter)
    currentState.rows[freeRowIndex].chars[freeLetterIndex] = {char: letter, state: CharState.NONE}
    return currentState
  })
}

const deleteLetter = () => {
  InputsStore.update((currentState) => {
    const freeRowIndex = currentState.rows.findIndex((row) => row.current )
    const lastLetterIndex = findLastIndex(
      currentState.rows[freeRowIndex].chars,
      (letter) => letter !== undefined
    )
    currentState.rows[freeRowIndex].chars[lastLetterIndex] = undefined
    return currentState
  })
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
