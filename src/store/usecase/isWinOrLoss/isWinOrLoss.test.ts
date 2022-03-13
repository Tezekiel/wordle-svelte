import { GameState } from "../../types/types";
import { liveGame, lostGame, wonGame } from "./gameStates";
import { isWinOrLoss } from "./isWinOrLoss";

describe('test win, loss or play game state ', () => {

  test('is win', () => {
    expect(isWinOrLoss(wonGame)).toStrictEqual(GameState.Win)
  })

  test('is loss', () => {
    expect(isWinOrLoss(lostGame)).toStrictEqual(GameState.Loss)
  })

  test('is neither win nor loss', () => {
    expect(isWinOrLoss(liveGame)).toStrictEqual(GameState.Play)
  })
})
