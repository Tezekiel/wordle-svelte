import type { GameAnalytics } from "../types/types";
import { emptyAnalytics } from "../constants/empty-analytics";

export const setGameAnalytics = (analytics: GameAnalytics) => {
  localStorage.setItem('analytics', JSON.stringify(analytics))
}

export const getGameAnalytics = () => {
  const exist = localStorage.getItem('analytics')
  if (exist) {
    return JSON.parse(exist) as GameAnalytics
  } else {
    setGameAnalytics(emptyAnalytics)
    return JSON.parse(localStorage.getItem('analytics')) as GameAnalytics
  }
}
