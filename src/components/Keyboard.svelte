<script>
  import Key from "../components/Key.svelte"
  import { characters } from "../constants/characters.js"
  import { actions } from "../constants/actions.js"
  import { CharState } from "./model/types";

  const keys = characters
  const keyActions = actions

  // for saving references to each Key component
  let allKeys = []

  document.onkeydown = function (event) {
    let key = event.key.toLowerCase()
    if (key === 'backspace') key = 'back'

    const component = allKeys[key]
    component && component.forceClick()
  }

</script>

<div class="wrapper">
  <div class="actions">
    {#each keyActions as key}
      <Key inputChar="{{char:key.toUpperCase(), state: CharState.NONE}}"
           isActions="true"
           bind:this={allKeys[key]}
           on:validation
      />
    {/each}
  </div>
  <div class="container">
    {#each keys as key}
      <Key inputChar="{{char:key.toUpperCase(), state: CharState.NONE}}"
           bind:this={allKeys[key]}
           on:validation
      />
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
