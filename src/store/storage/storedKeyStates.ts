import type { CharState } from "../../components/model/types";

export const getStoredKeyStates = () => {
  return JSON.parse(localStorage.getItem('keyState'))
}

export const saveKeys = (keyStates: Map<string, CharState>) => {
  // todo dont save non finished rows
  localStorage.setItem('keyState', JSON.stringify(keyStates))
}

