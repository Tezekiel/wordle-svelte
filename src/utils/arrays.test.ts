import { findLastIndex } from "./arrays";

describe('test array utils', () => {
  const booleanArray = [true, true, false, false, true]
  const intArray = [0, 1, 1, 1]

  test('returns correct index', () => {
    expect(findLastIndex(booleanArray, (value => value === false))).toStrictEqual(3)
    expect(findLastIndex(booleanArray, (value => value === true))).toStrictEqual(4)
    expect(findLastIndex(intArray, (value => value === 0))).toStrictEqual(0)
    expect(findLastIndex(intArray, (value => value === 1))).toStrictEqual(3)
  })

  test('returns -1 if not match predicate', () => {
    expect(findLastIndex(intArray, (value => value === 2))).toStrictEqual(-1)
    expect(findLastIndex(intArray, (value => value === -1))).toStrictEqual(-1)
    expect(findLastIndex(intArray, (value => value === 0.5))).toStrictEqual(-1)
  })
})
