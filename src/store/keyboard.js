import { writable } from 'svelte/store'

export const KeyboardStore = writable([
  'q', 'w', 'e', 'r',
  't', 'y', 'u', 'o',
  'p', 'i', 'a', 's',
  'd', 'f', 'g', 'h',
  'j', 'k', 'l', 'enter',
  'z', 'x', 'c', 'v',
  'b', 'n', 'm', 'back'
])
