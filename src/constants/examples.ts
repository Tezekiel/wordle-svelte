import { CharState } from "../components/model/types";

export let exampleOne = {done: true, chars: [
    {char: 'B', state: CharState.CORRECT},
    {char: 'A', state: CharState.NONE},
    {char: 'T', state: CharState.NONE},
    {char: 'A', state: CharState.NONE},
    {char: 'K', state: CharState.NONE},
  ]}

export let exampleTwo = {done: true, chars: [
    {char: 'K', state: CharState.NONE},
    {char: 'R', state: CharState.EXIST},
    {char: 'A', state: CharState.NONE},
    {char: 'V', state: CharState.NONE},
    {char: 'A', state: CharState.NONE},
  ]}

export let exampleThree = {done: true, chars: [
    {char: 'M', state: CharState.NONE},
    {char: 'R', state: CharState.NONE},
    {char: 'A', state: CharState.NONE},
    {char: 'V', state: CharState.WRONG},
    {char: 'I', state: CharState.NONE},
  ]}
