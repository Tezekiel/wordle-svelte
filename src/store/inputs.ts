import { writable } from 'svelte/store'

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
