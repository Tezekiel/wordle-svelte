import { writable } from 'svelte/store'

interface Settings {
  helpVisible: boolean,
  settingsVisible: boolean,
  darkMode: boolean,
}

export const SettingsStore = writable<Settings>({
  helpVisible: false,
  settingsVisible: false,
  darkMode: false
})

SettingsStore.subscribe((state) => {
  if (state.darkMode) {
    window.document.body.classList.add('dark-mode')
  } else {
    window.document.body.classList.remove('dark-mode')
  }
})

export const toggleProperty = (property: string) => {
  SettingsStore.update((currentState) => {
    const obj = {...currentState}
    obj[property] = !obj[property]
    return obj
  })
}
