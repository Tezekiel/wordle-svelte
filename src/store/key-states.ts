import { writable } from 'svelte/store'
import { CharState } from "../components/model/types";
import type { InputChar } from "./types/types";

export const keyStateStore = writable<Map<string, CharState>>(
  new Map<string, CharState>()
)

export const updateKeyState = (newChar: InputChar) => {
  keyStateStore.update((state) => {
    const currentKeyState = state[newChar.char] as CharState

    switch (currentKeyState) {
      case CharState.WRONG:
        if (newChar.state === CharState.EXIST || newChar.state === CharState.CORRECT) {
          state[newChar.char] = newChar.state
        }
        break;
      case CharState.EXIST:
        if (newChar.state === CharState.CORRECT) {
          state[newChar.char] = newChar.state
        }
        state[newChar.char] = newChar.state
        break;
      case CharState.CORRECT:
        break;
      default:
        state[newChar.char] = newChar.state
    }

    return state
  })
}
