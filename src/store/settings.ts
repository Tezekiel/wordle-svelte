import { writable } from 'svelte/store'

interface Settings {
  helpVisible: boolean,
  settingsVisible: boolean,
  darkMode: boolean,
  isEnglish: boolean,
}

export const settings = writable<Settings>({
  helpVisible: false,
  settingsVisible: false,
  darkMode: false,
  isEnglish: false
})

settings.subscribe((state) => {
  if (state.darkMode) {
    window.document.body.classList.add('dark-mode')
  } else {
    window.document.body.classList.remove('dark-mode')
  }
})

export const toggleProperty = (property: string) => {
  settings.update((currentState) => {
    const obj = {...currentState}
    obj[property] = !obj[property]
    return obj
  })
}
