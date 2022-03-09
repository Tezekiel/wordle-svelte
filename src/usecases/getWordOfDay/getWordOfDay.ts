import { diffInDays } from "../getDiffInDays/getDiffInDays";

export const potentialsWords = ['dabar', 'klada', 'krava', 'ptica', 'psina', 'vatra', 'glava']

const getWordOfDay = (index: number = diffInDays()) => {
  if (index <= 0) index = 0
  if (index >= potentialsWords.length - 1) index = potentialsWords.length - 1
  return potentialsWords[index].toUpperCase().split('')
}
const getWordOfDayString = (index: number = diffInDays()) => {
  if (index <= 0) index = 0
  if (index >= potentialsWords.length - 1) index = potentialsWords.length - 1
  return potentialsWords[index].toUpperCase()
}
export { getWordOfDay, getWordOfDayString }
