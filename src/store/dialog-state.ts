import { writable } from 'svelte/store'

interface DialogState {
  helpVisible: boolean,
  settingsVisible: boolean,
}

export const dialogs = writable<DialogState>({
  helpVisible: false,
  settingsVisible: false,
})

export const toggleDialog = (property: string) => {
  console.log(property)
  dialogs.update((currentState) => {
  console.log(currentState)
    const obj = {...currentState}
    obj[property] = !obj[property]
    return obj
  })
}
