import { diffInDays } from "../getDiffInDays/getDiffInDays";

export const potentialWords = [
  'dabar', 'klada', 'krava', 'ptica', 'psina', 'vatra', 'glava', 'suton', 'odbor', 'torta',
  'drven', 'oklop', 'moral', 'šlapa', 'ništa', 'šegrt', 'šverc', 'čavao', 'četka', 'mijeh',
  'panda', 'spora', 'mikro', 'mikro', 'šugav', 'kičma', 'barij', 'vepar', 'djeca', 'skuta',
]

const getWordOfDay = (index: number = diffInDays()) => {
  if (index <= 0) index = 0
  if (index >= potentialWords.length - 1) index = potentialWords.length - 1
  return potentialWords[index].toUpperCase().split('')
}
const getWordOfDayString = (index: number = diffInDays()) => {
  if (index <= 0) index = 0
  if (index >= potentialWords.length - 1) index = potentialWords.length - 1
  return potentialWords[index].toUpperCase()
}
export { getWordOfDay, getWordOfDayString }
