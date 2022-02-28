<script lang="ts">
  import { CharState } from "../model/types";
  import { bgFromCharState } from "../utils/utils";
  import { InputChar } from "../../store/inputs";

  export let inputChar: InputChar | undefined

  $: background = bgFromCharState(inputChar?.state ?? CharState.NONE)
</script>

<div class="wrapper {background}">
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

  .black {
    background-color: #121213;
  }

  .yellow {
    background-color: #b59f3b;
    animation: flip .35s linear;
  }

  .green {
    background-color: #538d4e;
    animation: flip .35s linear;
  }
</style>
