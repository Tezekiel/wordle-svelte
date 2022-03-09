import { getWordOfDay, getWordOfDayString, potentialsWords } from "./getWordOfDay";

describe('word of day tests', () => {
  test('returns first string if index is 0 or less than 0', () => {
    expect(getWordOfDayString(0)).toBe('DABAR')
    expect(getWordOfDayString(-1)).toBe('DABAR')
    expect(getWordOfDayString(-100)).toBe('DABAR')
    expect(getWordOfDay(0).join('')).toBe('DABAR')
    expect(getWordOfDay(-1).join('')).toBe('DABAR')
    expect(getWordOfDay(-100).join('')).toBe('DABAR')
  })

  test('returns correct word for given index', () => {
    expect(getWordOfDayString(2)).toBe('KRAVA')
    expect(getWordOfDayString(5)).toBe('VATRA')
    expect(getWordOfDay(2).join('')).toBe('KRAVA')
    expect(getWordOfDay(5).join('')).toBe('VATRA')
  })

  test('returns last word if index is out of bounds', () => {
    const lastWord = potentialsWords[potentialsWords.length - 1].toUpperCase()
    expect(getWordOfDayString(2000)).toBe(lastWord)
    expect(getWordOfDay(2000).join('')).toBe(lastWord)
  })
})
