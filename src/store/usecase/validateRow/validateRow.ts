import type { InputRow } from "../../types/types";
import { validWords } from "../../../constants"

export enum Validation {
  // row done
  OK,
  // game done
  Done,
  // game lost
  Lost,
  // errors
  AlreadyDone,
  TooShort,
  NotInList
}

export const validateRow = (row: InputRow): Validation => {
  // already done
  if (row.done) return Validation.AlreadyDone
  // not full
  if (row.chars[4] == undefined) return Validation.TooShort
  // value contained in list
  const charsToWord = row.chars.map(obj => obj.char).join('').toLowerCase()
  if (validWords.find(word => charsToWord === word) !== undefined) {
    return Validation.OK
  } else {
    return Validation.NotInList
  }
}


