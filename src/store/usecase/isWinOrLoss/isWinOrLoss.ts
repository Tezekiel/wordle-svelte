import type { Game } from "../../types/types";
import { GameState } from "../../types/types";
import { findLastIndex } from "../../../utils/arrays";
import { CharState } from "../../../components/model/types";

export const isWinOrLoss = (game: Game) => {
  // win condition
  const latestRow = game.rows[findLastIndex(game.rows, (value => value.done))]
  const isWin = latestRow.chars.every(value => value.state === CharState.CORRECT)
  if (isWin) return GameState.Win

  // loss condition
  const isLoss = !game.rows[5].chars.every(value => value.state === CharState.CORRECT)
  if (isLoss) return GameState.Loss

  return GameState.Play
}
