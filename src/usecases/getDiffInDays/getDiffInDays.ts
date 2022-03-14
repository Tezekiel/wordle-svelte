const fallbackDate = new Date(2022, 2, 14)

export const diffInDays = (from?: Date) : number => {
  const startingDate = from ?? fallbackDate
  const aDay = 1000 * 60 * 60 * 24
  const diffTime = new Date().getTime() - startingDate.getTime()
  if (diffTime <= 0) return 0
  return Math.floor(diffTime / aDay)
}
