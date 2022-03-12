import type { CharState } from "../../components/model/types";

export interface Game {
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
