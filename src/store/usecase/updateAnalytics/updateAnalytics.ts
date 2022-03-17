import type { Game } from "../../types/types";
import { getStoredGame } from "../../storage/storedGame";
import type { GameAnalytics } from "../../types/types";
import { getGameAnalytics, setGameAnalytics } from "../../storage/storedAnalytics";
import { findLastIndex } from "../../../utils/arrays";

export const handleWin = (analytics: GameAnalytics, game: Game) => {
  const newAnalytics = {...analytics}

  // stats
  newAnalytics.played++
  newAnalytics.won++
  newAnalytics.winPercent = Number((newAnalytics.won / newAnalytics.played).toFixed(2)) * 100
  newAnalytics.streak++
  newAnalytics.maxStreak = (newAnalytics.maxStreak > newAnalytics.streak) ? newAnalytics.maxStreak : newAnalytics.streak

  // distribution
  const newGuess = {...analytics.guessDistribution}
  const wonAt = findLastIndex(game.rows, (value => value.done)) + 1
  newGuess[wonAt]++
  newGuess.latest = wonAt
  newAnalytics.guessDistribution = newGuess

  return newAnalytics
}

export const handleLoss = (analytics: GameAnalytics): GameAnalytics => {
  const newAnalytics = {...analytics}
  newAnalytics.played++
  newAnalytics.streak = 0
  newAnalytics.winPercent = Number((newAnalytics.won / newAnalytics.played).toFixed(2)) * 100
  return newAnalytics
}

export const updateAnalytics = (
  isWin: boolean,
  current: GameAnalytics = getGameAnalytics(),
  game: Game = getStoredGame()
) => {
  const newAnalytics = isWin ? handleWin(current, game) : handleLoss(current)
  setGameAnalytics(newAnalytics)
}
