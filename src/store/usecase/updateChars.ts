import { wordOfDay } from "../../constants"
import type { InputChar, InputRow } from "../inputs";
import { CharState } from "../../components/model/types";
import { updateKeyState } from "../key-states";

export const updateChars = (row: InputRow): InputRow => {
  const newRow = {...row}.chars.map((char, i) => {
    const newChar = updateCharState(char, i)
    updateKeyState(newChar)
    return newChar
  })
  return {done: true, chars: newRow}
}

const updateCharState = (char: InputChar, index: number): InputChar => {
  const newChar = {...char}
  // wrong as default
  newChar.state = CharState.WRONG

  // exact match
  if (wordOfDay[index] === char.char) {
    newChar.state = CharState.CORRECT
    return newChar
  }
  // char does exist somewhere in word
  if (wordOfDay.find(letter => letter === char.char) !== undefined) {
    newChar.state = CharState.EXIST
    return newChar
  }
  // default, stays as is
  return newChar
}

