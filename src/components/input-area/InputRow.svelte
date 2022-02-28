<script lang="ts">
  import { InputRow } from "../../store/inputs"
  import InputCharBox from "./InputCharBox.svelte"

  export let row: InputRow
</script>

<div class="wrapper">
  {#each row.chars as inputChar}
    <InputCharBox {inputChar} />
  {/each}
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>
