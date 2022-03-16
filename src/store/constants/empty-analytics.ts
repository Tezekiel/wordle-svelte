import type { GameAnalytics } from "../types/types";

const distribution = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  latest: 3
}

export const emptyAnalytics: GameAnalytics = {
  played: 0,
  won: 0,
  winPercent: 0,
  streak: 0,
  maxStreak: 0,
  guessDistribution: distribution
}
