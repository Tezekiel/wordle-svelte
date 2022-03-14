import { liveGame, liveGameEmptyRows, lostGame, wonGame } from "./gameStates";
import { isWinOrLoss } from "./isWinOrLoss";
import { Validation } from "../validateRow/validateRow";

describe('test win, loss or play game state ', () => {

  test('is win', () => {
    expect(isWinOrLoss(wonGame)).toStrictEqual(Validation.Win)
  })

  test('is loss', () => {
    expect(isWinOrLoss(lostGame)).toStrictEqual(Validation.Lost)
  })

  test('is neither win nor loss', () => {
    expect(isWinOrLoss(liveGameEmptyRows)).toStrictEqual(Validation.OK)
    expect(isWinOrLoss(liveGame)).toStrictEqual(Validation.OK)
  })
})
