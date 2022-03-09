import { diffInDays } from "./getDiffInDays";

describe('day diff tests', () => {
  test('returns a number', () => {
    expect(typeof diffInDays() === "number")
  })

  test('returns 1 if passed date is yesterday', () => {
    const aDay = 1000 * 60 * 60 * 24
    const yesterday = new Date(new Date().getTime() - aDay)
    expect(diffInDays(yesterday)).toBe(1)
  })

  test('returns 0 if date in future', () => {
    const aDay = 1000 * 60 * 60 * 24
    const tomorrow = new Date(new Date().getTime() + aDay)
    expect(diffInDays(tomorrow)).toBe(0)
  })
})
