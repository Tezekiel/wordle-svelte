import type { GameAnalytics } from "../types/types";

const distribution = {
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
  six: 0,
  latest: 'three'
}

export const emptyAnalytics: GameAnalytics = {
  played: 0,
  winPercent: 0,
  streak: 0,
  maxStreak: 0,
  guessDistribution: distribution
}
