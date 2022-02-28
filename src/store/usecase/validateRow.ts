import type { InputRow } from "../inputs";
import { validWords } from "../../constants/valid-words.js"

export const validateRow = (row: InputRow): boolean => {
  // already done
  if (row.done) return false
  // not full
  if (!row.chars.every(value => value?.char !== undefined && value?.state !== undefined)) return false
  // value contained in list
  const charsToWord = row.chars.map(obj => obj.char).join('').toLowerCase()
  return validWords.find(word => charsToWord === word) !== undefined;
}


