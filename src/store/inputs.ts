import { writable } from 'svelte/store'
import { findLastIndex } from "../utils/arrays";
import { get } from 'svelte/store';
import { CharState } from "../components/model/types";
import { validateRow } from "./usecase/validateRow";

export interface Inputs {
  rows: InputRow[]
}

export interface InputRow {
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
  const row = get(InputsStore).rows.find((row) => row.done === false)
  console.log(validateRow(row))
  if(validateRow(row)){

  }
  console.log('ROW SAVED')
}

const updateLetter = (letter: string) => {
  InputsStore.update((currentState) => {
    const freeRowIndex = currentState.rows.findIndex((row) => row.done === false)
    const freeLetterIndex = currentState.rows[freeRowIndex].chars.findIndex((letter) => !letter)
    currentState.rows[freeRowIndex].chars[freeLetterIndex] = {char: letter, state: CharState.NONE}
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

export const resolveUserInput = (key: string) => {
  if (key === 'BACK'){
    deleteLetter()
  } else if (key === 'ENTER'){
    saveRow()
  } else {
    updateLetter(key)
  }
}
