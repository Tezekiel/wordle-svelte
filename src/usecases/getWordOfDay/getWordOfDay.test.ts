import { getWordOfDay, getWordOfDayString, potentialsWords } from "./getWordOfDay";

test('returns first string if index is 0 or less than 0', () => {
  expect(getWordOfDayString(0) === 'dabar')
  expect(getWordOfDayString(-1) === 'dabar')
  expect(getWordOfDayString(-100) === 'dabar')
  expect(getWordOfDay(0).join('') === 'dabar')
  expect(getWordOfDay(-1).join('') === 'dabar')
  expect(getWordOfDay(-100).join('') === 'dabar')
})

test('returns correct word for given index', () => {
  expect(getWordOfDayString(2) === 'krava')
  expect(getWordOfDayString(5) === 'vatra')
  expect(getWordOfDay(2).join('') === 'krava')
  expect(getWordOfDay(5).join('') === 'vatra')
})

test('returns last word if index is out of bounds', () => {
  const lastWord = potentialsWords[potentialsWords.length - 1]
  expect(getWordOfDayString(2000) === lastWord)
  expect(getWordOfDay(2000).join('') === lastWord)
})
