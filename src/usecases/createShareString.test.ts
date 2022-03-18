import { lostGame, wonGame } from "../store/usecase/isWinOrLoss/gameStates";
import { getRowWon, renderRow } from "./createShareString";
import type { InputChar } from "../store/types/types";
import { CharState } from "../components/model/types";

describe('test string creating for share game', () => {
  const testRow : InputChar[] = [
    {char: 'B', state: CharState.EXIST},
    {char: 'A', state: CharState.CORRECT},
    {char: 'T', state: CharState.WRONG},
    {char: 'A', state: CharState.WRONG},
    {char: 'K', state: CharState.EXIST},
  ]

  test('correct row won', () => {
    expect(getRowWon(wonGame)).toBe('1')
  })

  test('correctly render row', () => {
    expect(renderRow(wonGame.rows[0].chars)).toBe('🟩🟩🟩🟩🟩')
    expect(renderRow(lostGame.rows[0].chars)).toBe('🟨🟩🟩🟩🟩')
    expect(renderRow(testRow)).toBe('🟨🟩⬛⬛🟨')
  })
})
