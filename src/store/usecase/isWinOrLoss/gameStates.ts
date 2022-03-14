import type { Game, InputChar } from "../../types/types";
import { CharState } from "../../../components/model/types";

const wonRow: InputChar[] = [
  {char: 'B', state: CharState.CORRECT},
  {char: 'A', state: CharState.CORRECT},
  {char: 'T', state: CharState.CORRECT},
  {char: 'A', state: CharState.CORRECT},
  {char: 'K', state: CharState.CORRECT},
]

const lostRow: InputChar[] = [
  {char: 'B', state: CharState.EXIST},
  {char: 'A', state: CharState.CORRECT},
  {char: 'T', state: CharState.CORRECT},
  {char: 'A', state: CharState.CORRECT},
  {char: 'K', state: CharState.CORRECT},
]

export const wonGame: Game = {
  rows: [
    {current: false, done: true, chars: wonRow},
    {current: false, done: false, chars: new Array(5)},
    {current: false, done: false, chars: new Array(5)},
    {current: false, done: false, chars: new Array(5)},
    {current: false, done: false, chars: new Array(5)},
    {current: false, done: false, chars: new Array(5)}
  ]
}

export const lostGame: Game = {
  rows: [
    {current: false, done: true, chars: lostRow},
    {current: false, done: true, chars: lostRow},
    {current: false, done: true, chars: lostRow},
    {current: false, done: true, chars: lostRow},
    {current: false, done: true, chars: lostRow},
    {current: false, done: true, chars: lostRow}
  ]
}

export const liveGame: Game = {
  rows: [
    {current: false, done: true, chars: lostRow},
    {current: false, done: true, chars: lostRow},
    {current: false, done: true, chars: lostRow},
    {current: false, done: true, chars: lostRow},
    {current: false, done: true, chars: lostRow},
    {current: true, done: false, chars: new Array(5)}
  ]
}
export const liveGameEmptyRows: Game = {
  rows: [
    {current: true, done: true, chars: lostRow},
    {current: false, done: false, chars: new Array(5)},
    {current: false, done: false, chars: new Array(5)},
    {current: false, done: false, chars: new Array(5)},
    {current: false, done: false, chars: new Array(5)},
    {current: false, done: false, chars: new Array(5)}
  ]
}
