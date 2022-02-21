<script lang="ts">
  import { KeyboardStore } from "../store/keyboard"
  import Key from "../components/Key.svelte"

  const allKeys: string[] = $KeyboardStore
  console.log(allKeys)
</script>

<div class="wrapper">
  <div class="container">
    {#each allKeys as key}
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
