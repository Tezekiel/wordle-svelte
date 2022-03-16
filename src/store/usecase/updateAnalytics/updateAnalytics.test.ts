import { handleLoss, handleWin } from "./updateAnalytics";
import { analytics1, analytics2 } from "./mockData";
import { wonGame } from "../isWinOrLoss/gameStates";

describe('test analytics update for win and loss', () => {
  test('return correct analytics for a loss', () => {
    expect(handleLoss(analytics1).played).toBe(15)
    expect(handleLoss(analytics1).streak).toBe(0)
    expect(handleLoss(analytics1).winPercent).toBe(60)
  })

  test('return correct analytics for a win', () => {
    expect(handleWin(analytics2, wonGame).played).toBe(11)
    expect(handleWin(analytics2, wonGame).won).toBe(8)
    expect(handleWin(analytics2, wonGame).winPercent).toBe(73)
    expect(handleWin(analytics2, wonGame).streak).toBe(4)
    expect(handleWin(analytics2, wonGame).maxStreak).toBe(4)
    expect(handleWin(analytics2, wonGame).guessDistribution[1]).toBe(1)
    expect(handleWin(analytics2, wonGame).guessDistribution[4]).toBe(3)
    expect(handleWin(analytics2, wonGame).guessDistribution.latest).toBe(1)
  })
})


