import type { GameAnalytics } from "../types/types";
import { emptyAnalytics } from "../constants/empty-analyitcs";

export const setGameAnalytics = (analytics: GameAnalytics) => {
  localStorage.setItem('analytics', JSON.stringify(analytics))
}

export const getGameAnalytics = () => {
  const exist = localStorage.getItem('analytics')
  if (exist) {
    return exist
  } else {
    setGameAnalytics(emptyAnalytics)
    return false
  }
}
