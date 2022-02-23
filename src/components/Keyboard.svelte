<script lang="ts">
  import Key from "../components/Key.svelte"
  import { characters } from "../constants/characters.js"
  import { actions } from "../constants/actions.js"

  const keys: string[] = characters
  const keyActions: string[] = actions
</script>

<div class="wrapper">
  <div class="actions">
    {#each keyActions as key}
      <Key keyValue="{key.toUpperCase()}" isActions="true"/>
    {/each}
  </div>
  <div class="container">
    {#each keys as key}
      <Key keyValue="{key.toUpperCase()}"/>
    {/each}
  </div>
</div>

<style>
  .wrapper {
    flex: 3 1;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .actions {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px 22px;
    height: 70px;
  }
  .container {
    justify-content: center;
    display: flex;
    width: 100%;
    align-items: center;
    height: 200px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
</style>
