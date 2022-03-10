import { derived} from "svelte/store";
import { settings } from "./settings";

export interface Localization {
  key: string
}

export const localization = derived(
  settings,
  $settings => {
    if ($settings.isCroatian){
      return 'CRO'
    } else {
      return 'ENG'
    }
  }
)
