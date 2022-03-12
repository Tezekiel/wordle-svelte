import type { Game } from "../types/types";

export const emptyGame: Game = {
  rows: [
    {current: true, done: false, chars: new Array(5)},
    {current: false, done: false, chars: new Array(5)},
    {current: false, done: false, chars: new Array(5)},
    {current: false, done: false, chars: new Array(5)},
    {current: false, done: false, chars: new Array(5)},
    {current: false, done: false, chars: new Array(5)}
  ]
}
