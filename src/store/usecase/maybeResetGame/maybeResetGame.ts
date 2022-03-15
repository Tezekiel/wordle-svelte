import { shouldRefresh } from "../shouldRefreshGame/shouldRefreshGame";
import type { CharState } from "../../../components/model/types";
import { emptyGame } from "../../constants/empty-game";

const resetGame = () => {
  localStorage.setItem('keyState', JSON.stringify(new Map<string, CharState>()))
  localStorage.setItem('storeDate', Date.now().toString())
  localStorage.setItem('game', JSON.stringify(emptyGame))
  localStorage.setItem('block', String(false))
}

export function maybeResetGame() {
  const storedDate = localStorage.getItem('storeDate')
  if (!storedDate) resetGame()
  if (shouldRefresh(Number(storedDate))) {
    resetGame()
  }
}


