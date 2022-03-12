import { updateCharState } from "./updateChars";
import { CharState } from "../../../components/model/types";
import type { InputChar } from "../../types/types";

describe('update char state tests', () => {
  const wordOfDay = "BATAK".split('')
  const char: InputChar = {
    char: 'T',
    state: CharState.NONE,
  }
  const wrongChar: InputChar = {
    char: 'Z',
    state: CharState.NONE,
  }

  test('correctly updates chars', () => {
    const correct = updateCharState(char, 2, wordOfDay)
    const wrong = updateCharState(wrongChar, 0, wordOfDay)
    const exist = updateCharState(char, 0, wordOfDay)
    expect(correct.state).toBe(CharState.CORRECT)
    expect(wrong.state).toBe(CharState.WRONG)
    expect(exist.state).toBe(CharState.EXIST)
  })
})
