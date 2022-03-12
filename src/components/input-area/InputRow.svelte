<script lang="ts">
  import { InputRow } from "../../store/types/types"
  import InputCharBox from "./InputCharBox.svelte"

  export let row: InputRow
  export let shakeRow = false

</script>

<div class="wrapper" class:shake={shakeRow & row.current}>
  {#each row.chars as inputChar, index}
    <InputCharBox {inputChar} {index} />
  {/each}
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>
