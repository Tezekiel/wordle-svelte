import { writable } from 'svelte/store'
import { findLastIndex } from "../utils/arrays";

export interface Inputs {
  rows: InputRow[]
}

export interface InputRow {
  done: boolean,
  chars: string[]
}

export const InputsStore = writable<Inputs>(
  {
    rows: [
      {done: false, chars: new Array(5)},
      {done: false, chars: new Array(5)},
      {done: false, chars: new Array(5)},
      {done: false, chars: new Array(5)},
      {done: false, chars: new Array(5)},
      {done: false, chars: new Array(5)}
    ]
  }
)

// TODO
const saveRow = () => {
  // check length
  // check if exists
  console.log('ROW SAVED')
}

const updateLetter = (letter: string) => {
  InputsStore.update((currentState) => {
    const freeRowIndex = currentState.rows.findIndex((row) => row.done === false)
    const freeLetterIndex = currentState.rows[freeRowIndex].chars.findIndex((letter) => !letter)
    currentState.rows[freeRowIndex].chars[freeLetterIndex] = letter
    return currentState
  })
}

const deleteLetter = () => {
  InputsStore.update((currentState) => {
    const freeRowIndex = currentState.rows.findIndex((row) => row.done === false)
    const lastLetterIndex = findLastIndex(
      currentState.rows[freeRowIndex].chars,
      (letter) => letter !== undefined
    )
    currentState.rows[freeRowIndex].chars[lastLetterIndex] = undefined
    return currentState
  })
}

export const resolveClick = (key: string) => {
  if (key === 'BACK'){
    deleteLetter()
  } else if (key === 'ENTER'){
    saveRow()
  } else {
    updateLetter(key)
  }
}
