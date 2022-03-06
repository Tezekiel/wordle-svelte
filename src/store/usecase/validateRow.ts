import type { InputRow } from "../inputs";
import { validWords } from "../../constants/valid-words.js"

export enum Validation {
  OK,
  AlreadyDone,
  TooShort,
  NotInList
}

export const validateRow = (row: InputRow): Validation => {
  // already done
  if (row.done) return Validation.AlreadyDone
  // not full
  if (!row.chars.every(value => value?.char !== undefined && value?.state !== undefined)) return Validation.TooShort
  // value contained in list
  const charsToWord = row.chars.map(obj => obj.char).join('').toLowerCase()
  if (validWords.find(word => charsToWord === word) !== undefined){
    return Validation.OK
  } else {
    return Validation.NotInList
  }
}


