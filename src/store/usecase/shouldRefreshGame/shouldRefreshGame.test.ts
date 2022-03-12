import { shouldRefresh } from "./shouldRefreshGame";

describe('should refresh game tests', () => {

  test('should not refresh game', () => {
    expect(shouldRefresh(Date.now())).toBe(false)
    // hour ago (don't test between midnight and 1am :-))
    expect(shouldRefresh(Date.now() - 1000 * 60)).toBe(false)
  })

  test('should refresh game', () => {
    const aDay = 1000 * 60 * 60 * 24
    expect(shouldRefresh(Date.now() + aDay)).toBe(true)
    expect(shouldRefresh(Date.now() - aDay)).toBe(true)
    expect(shouldRefresh(Date.now() - (3 * aDay))).toBe(true)
  })

})
