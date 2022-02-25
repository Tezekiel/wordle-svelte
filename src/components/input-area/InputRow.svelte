<script lang="ts">
  import { InputRow } from "../../store/inputs"
  import InputBlock from "./InputBlock.svelte"
  import { ValidationType } from "./model/types";

  export let row: InputRow
</script>

<div class="wrapper">
  {#each row.chars as character}
    <InputBlock {character} type={ValidationType.NONE}/>
  {/each}
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>
