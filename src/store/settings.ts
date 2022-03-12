import { writable } from 'svelte/store'

interface Settings {
  darkMode: boolean,
  isEnglish: boolean,
}

const storedSettings: Settings = JSON.parse(localStorage.getItem('settings'))
export const settings = writable<Settings>(storedSettings ?? {
  darkMode: false,
  isEnglish: false
})

settings.subscribe((state) => {
  localStorage.setItem('settings', JSON.stringify(state))
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
