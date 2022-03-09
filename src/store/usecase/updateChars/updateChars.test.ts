import { updateChars } from "./updateChars";
import { CharState } from "../../../components/model/types";

describe('update chars tests', () => {
  const inRow = {
    current: true,
    done: false,
    chars: [{
      char: 'a',
      state: CharState.NONE
    }]
  }

  const outRow = {
    current: false,
    done: true,
    chars: [{
      char: 'a',
      state: CharState.WRONG
    }]
  }

  test('correctly  updates chars', () => {
    const updated = updateChars(inRow)
    expect(updated).not.toEqual(inRow)
    expect(updated.chars[0]).toStrictEqual(outRow.chars[0])
    expect(updated.chars[0].state).toStrictEqual(outRow.chars[0].state)
    expect(updated.current).toStrictEqual(outRow.current)
    expect(updated.done).toStrictEqual(outRow.done)
  })
})
