<script lang="ts">
  import { gameStore } from "../../store/game";
  import InputRow from "./InputRow.svelte"

  export let shakeRow = false
  $: game = $gameStore
</script>

<div class="wrapper">
  <div class="container">
    {#each game.rows as row, index}
      <InputRow {row} {shakeRow}/>
    {/each}
  </div>
</div>

<style>
  .wrapper {
    padding: 4vh 0;
    display: flex;
    justify-content: space-around;
    flex: 0.25 1;
  }

  .container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 40vh;
    width: 33vh;
  }
</style>
