import type { GameAnalytics } from "../../types/types";

const distribution = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 1,
  6: 2,
  latest: 3
}

export const analytics1: GameAnalytics = {
  played: 14,
  won: 9,
  winPercent: 64,
  streak: 4,
  maxStreak: 4,
  guessDistribution: distribution
}

export const analytics2: GameAnalytics = {
  played: 10,
  won: 7,
  winPercent: 70,
  streak: 3,
  maxStreak: 3,
  guessDistribution: distribution
}
