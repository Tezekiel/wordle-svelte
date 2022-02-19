<script lang="ts">
  import IconButton from "../ui-components/IconButton.svelte";
  import { IconType } from "../ui-components/model/types";

</script>

<div class="wrapper">
  <div class="header">
    <IconButton type={IconType.Help}/>
    <h1>Wordle</h1>
    <IconButton type={IconType.Settings}/>
  </div>
</div>

<style>
  .wrapper {
    border-bottom: 1px solid grey;
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    align-items: center;
  }


</style>
