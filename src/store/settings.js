import { writable } from 'svelte/store'

export const SettingsStore = writable({
  helpVisible: false,
  settingsVisible: false,
  darkMode: true
})
