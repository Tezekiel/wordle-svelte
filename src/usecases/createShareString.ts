import type { Game, InputChar, InputRow } from "../store/types/types";
import { getStoredGame } from "../store/storage/storedGame";
import { diffInDays } from "./getDiffInDays/getDiffInDays";
import { findLastIndex } from "../utils/arrays";
import { CharState } from "../components/model/types";
import { blackEmoji, greenEmoji, yellowEmoji } from "./getWordOfDay/emojis";

export const getGameCount = () => {
  return (diffInDays() + 1).toString()
}

export const getRowWon = (game: Game) => {
  return (findLastIndex(game.rows, (value => value.done)) + 1).toString()
}

export const renderRow = (chars: InputChar[]): string => {
  return chars.map(value => {
    switch (value.state) {
      case CharState.WRONG:
        return blackEmoji;
      case CharState.EXIST:
        return yellowEmoji;
      default:
        return greenEmoji;
    }
  }).join('')

}

export const createShareString = (game: Game = getStoredGame()): string => {
  const rows = game.rows
    .filter(row => !!row.chars[0])
    .map(value => renderRow(value.chars) + '\n')
    .join('')

  return `Wordle-Cro ${getGameCount()} ${getRowWon(game)}/6\n\n${rows}`
}
