import { CharState } from "../model/types";

export const bgFromCharState = (state: CharState) => {
  switch (state) {
    case CharState.NONE:
      return "black"
    case CharState.EXIST:
      return "yellow"
    case CharState.CORRECT:
      return "green"
    case CharState.WRONG:
      return "grey"
    default:
      return "default"
  }
}
