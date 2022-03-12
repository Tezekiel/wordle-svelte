import { getWordOfDay } from "../../../usecases/getWordOfDay/getWordOfDay"
import type { InputChar} from "../../types/types";
import { CharState } from "../../../components/model/types";

export const updateCharState = (char: InputChar, index: number, wordOfDay: string[] = getWordOfDay()): InputChar => {
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


