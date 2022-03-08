const potentialsWords = ['dabar', 'klada', 'krava', 'ptica', 'psina', 'vatra', 'glava']
const startingDate = new Date(2022, 2, 7)

function diffInDays() {
  const aDay = 1000 * 60 * 60 * 24
  const diffTime = new Date().getTime() - startingDate.getTime()
  const diffInDays = Math.floor(diffTime / aDay)
  console.log(diffInDays)
  return diffInDays
}
const getWordOfDay = potentialsWords[diffInDays()].toUpperCase().split('')
const getWordOfDayString = potentialsWords[diffInDays()].toUpperCase()
export { getWordOfDay, getWordOfDayString }
