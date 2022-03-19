import type { Game } from "../types/types";
import { emptyGame } from "../constants/empty-game";

export const saveGame = (game: Game) => {
  localStorage.setItem('game', JSON.stringify(game))
}

export const getStoredGame = (): Game => {
  const game = localStorage.getItem('game')
  if (game) {
    return JSON.parse(game)
  } else {
    saveGame(emptyGame)
    return JSON.parse(localStorage.getItem('game'))
  }
}
