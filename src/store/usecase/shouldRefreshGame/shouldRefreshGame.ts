export const shouldRefresh = (dateMillis: number) => {
  const dateToCheck = new Date(dateMillis)
  return !isToday(dateToCheck)
}

const isToday = (date: Date) => {
  const today = new Date()
  return date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
}

