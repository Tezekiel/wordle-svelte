<script lang="ts">
  import IconButton from "./ui-components/IconButton.svelte";
  import { IconType } from "./ui-components/model/types";
  import { toggleDialog } from "../store/dialog-state";

</script>

<div class="wrapper">
  <div class="header">
    <IconButton type={IconType.Help} on:click={() => toggleDialog('helpVisible')}/>
    <h1>Wordle-Cro</h1>
    <IconButton type={IconType.Settings} on:click={() => toggleDialog('settingsVisible')}/>
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
