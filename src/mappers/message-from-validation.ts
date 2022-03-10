import { Validation } from "../store/usecase/validateRow/validateRow";
import { get } from 'svelte/store';
import { localization } from "../store/localization";

export const messageFromValidation = (event) => {
  const validation: Validation = event.detail.status
  const lang = get(localization)
  switch (validation) {
    case Validation.AlreadyDone:
      return lang.get('error_already_done')
    case Validation.TooShort:
      return lang.get('error_too_short')
    case Validation.NotInList:
      return lang.get('error_not_in_list')
    default:
      break;
  }
}
