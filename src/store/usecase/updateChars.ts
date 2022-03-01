import { wordOfDay } from "../../constants"
import type { InputChar, InputRow } from "../inputs";
import { CharState } from "../../components/model/types";

export const updateChars = (row: InputRow): InputRow => {
  const newRow = {...row}.chars.map((char,i) => {
    return updateCharState(char, i)
  })
  return {done: true, chars: newRow}
}

const updateCharState = (char: InputChar, index: number): InputChar => {
  const newChar = {...char}

  // exact match
  if (wordOfDay[index] === char.char) {
    newChar.state = CharState.CORRECT
    return newChar
  }
  // char does exist somewhere in word
  if (wordOfDay.find(letter => letter === char.char) !== undefined){
    newChar.state = CharState.EXIST
    return newChar
  }
  // default, stays as is
  return newChar
}


