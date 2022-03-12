import type { CharState } from "../../components/model/types";
import { shouldRefresh } from "../usecase";

const gameStoreDate = localStorage.getItem('storeDate')
export const storedKeyStates: Map<string, CharState> = JSON.parse(localStorage.getItem('keyState'))

export const saveOrResetKeys = (keyStates: Map<string, CharState>) => {
  if (!gameStoreDate) {
    localStorage.setItem('storeDate', Date.now().toString())
    localStorage.setItem('keyState', JSON.stringify(new Map<string, CharState>()))
  }
  if (shouldRefresh(Number(gameStoreDate))) {
    localStorage.setItem('keyState', JSON.stringify(new Map<string, CharState>()))
    localStorage.setItem('storeDate', Date.now().toString())
  } else {
    localStorage.setItem('keyState', JSON.stringify(keyStates))
  }
}

