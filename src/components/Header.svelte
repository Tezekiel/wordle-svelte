<script lang="ts">
  import IconButton from "../ui-components/IconButton.svelte";
  import { IconType } from "../ui-components/model/types";
  import { toggleProperty } from "../store/settings"

</script>

<div class="wrapper">
  <div class="header">
    <IconButton type={IconType.Help} on:click={() => toggleProperty('helpVisible')}/>
    <h1>Wordle-Cro</h1>
    <IconButton type={IconType.Settings} on:click={() => toggleProperty('settingsVisible')}/>
  </div>
</div>

<style>
  .wrapper {
    flex: 0.75 1;
    border-bottom: 1px solid grey;
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    align-items: center;
  }


</style>
