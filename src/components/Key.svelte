<script lang="ts">
  import { bgFromCharState } from "./utils/utils.ts";
  import { InputChar, InputsStore, resolveUserInput } from "../store/inputs";
  import { CharState } from "./model/types";
  import { KeyStateStore } from "../store/key-states";
  import { Validation } from "../store/usecase/validateRow/validateRow";
  import { createEventDispatcher } from "svelte";

  export let inputChar: InputChar = {char: "", state: CharState.NONE}
  export let isActions = false
  let element

  $: keyState = $KeyStateStore
  $: background = bgFromCharState(keyState[inputChar.char])

  const dispatch = createEventDispatcher();

  export const forceClick = () => {
    element.click()
    element.animate([
      {transform: 'translateY(3px)'},
      {backgroundColor: 'yellow'}
    ], {duration: 150,})
  }

  const handleClick = () => {
    let result: Validation | undefined = resolveUserInput(inputChar.char)
    if (result) dispatch('validation', {
      status: result
    })
  }
</script>

<div class="key {isActions ? 'special container' : 'container' } {background} default"
     bind:this={element}
     on:click={handleClick}
     style="--delay:{`2.2s`}">
  {inputChar.char}
</div>

<style>
  .container {
    align-items: center;
    border-radius: 3px;
    color: #d7dadc;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 700;
    height: 27%;
    width: 40px;
    margin: 4px 2px;
    justify-content: center;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .special {
    height: 100%;
    width: 70px;
  }

  .key:active {
    background-color: yellow;
    transform: translateY(3px);
  }

</style>
