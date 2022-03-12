import { emptyGame } from "../constants/empty-game";
import { shouldRefresh } from "../usecase";
import type { Game } from "../types/types";

const gameStoreDate = localStorage.getItem('storeDate')
export const storedGame: Game = JSON.parse(localStorage.getItem('game'))

export const saveOrResetGame = (game: Game) => {
  if (!gameStoreDate) {
    localStorage.setItem('storeDate', Date.now().toString())
    localStorage.setItem('game', JSON.stringify(emptyGame))
  }
  if (shouldRefresh(Number(gameStoreDate))) {
    localStorage.setItem('storeDate', Date.now().toString())
    localStorage.setItem('game', JSON.stringify(emptyGame))
  } else {
    localStorage.setItem('game', JSON.stringify(game))
  }
}
