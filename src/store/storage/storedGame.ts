import type { Game } from "../types/types";

export const saveGame = (game: Game) => {
  localStorage.setItem('game', JSON.stringify(game))
}

export const getStoredGame = () => {
  return JSON.parse(localStorage.getItem('game'))
}
