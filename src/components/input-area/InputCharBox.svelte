<script lang="ts">
  import { CharState } from "../model/types";
  import { bgFromCharState } from "../utils/utils";
  import { InputChar } from "../../store/types/types";

  export let inputChar: InputChar | undefined
  export let index: number = 0

  $: background = bgFromCharState(inputChar?.state ?? CharState.NONE)
  const delay = `${index * 0.4}s`
</script>

<div class="wrapper {background}" style="--delay:{delay}">
  {inputChar?.char ?? ""}
</div>

<style>
  .wrapper {
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    width: 6vh;
    height: 6vh;
    font-size: 1.7rem;
    font-weight: 600;
    padding: 1px;
    text-transform: uppercase;
    border: 1px solid var(--on-light-secondary);
    color: var(--on-light-secondary);
  }
  :global(body.dark-mode) .wrapper {
    color: var(--on-dark-secondary);
    border: 1px solid var(--on-dark-secondary);
  }



</style>
