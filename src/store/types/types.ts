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

interface GuessDistribution {
  1: number,
  2: number,
  3: number,
  4: number,
  5: number,
  6: number,
  latest: number
}

export interface GameAnalytics {
  played: number
  won: number
  winPercent: number
  streak: number
  maxStreak: number
  guessDistribution: GuessDistribution
}
