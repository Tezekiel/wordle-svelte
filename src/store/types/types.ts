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
  one: number,
  two: number,
  three: number,
  four: number,
  five: number,
  six: number,
  latest: string
}

export interface GameAnalytics {
  played: number
  winPercent: number
  streak: number
  maxStreak: number
  guessDistribution: GuessDistribution
}
