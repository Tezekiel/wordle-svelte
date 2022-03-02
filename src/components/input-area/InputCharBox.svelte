<script lang="ts">
  import { CharState } from "../model/types";
  import { bgFromCharState } from "../utils/utils";
  import { InputChar } from "../../store/inputs";

  export let inputChar: InputChar | undefined
  export let index: number = 0

  $: background = bgFromCharState(inputChar?.state ?? CharState.NONE)
  const delay = `${index * 0.5}s`
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
    border: 1px solid #3a3a3a;
    width: 6vh;
    height: 6vh;
    font-size: 1.7rem;
    font-weight: 600;
    padding: 1px;
    color: #d7dadc;
    text-transform: uppercase;
  }


</style>
