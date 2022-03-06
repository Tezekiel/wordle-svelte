import { Validation } from "../store/usecase/validateRow";

export const messageFromValidation = (event) => {
  const validation: Validation = event.detail.status
  switch (validation) {
    case Validation.OK:
      break;
    case Validation.AlreadyDone:
      return "Something went wrong."
    case Validation.TooShort:
      return "Word must be 5 letters long."
    case Validation.NotInList:
      return "Word not in list."
  }
}
