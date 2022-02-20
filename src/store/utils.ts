import { SettingsStore } from "../store/settings"

export const toggleProperty = (property: string) => {
  SettingsStore.update((currentState) => {
    const obj = {...currentState}
    obj[property] = !obj[property]
    return obj
  })
}
