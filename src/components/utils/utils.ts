import { ValidationState } from "../model/types";

export const bgFromValidation = (type: ValidationState) => {
  switch (type) {
    case ValidationState.NONE:
      return "black"
    case ValidationState.EXIST:
      return "yellow"
    case ValidationState.CORRECT:
      return "green"
  }
}
