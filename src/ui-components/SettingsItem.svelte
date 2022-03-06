<script lang="ts">
  import Switch from "./Switch.svelte"

  export let title = ''
  export let subtitle = ''
  export let checked = false;
</script>

<div class="wrapper">
  <div>
    <p class="title">{title}</p>
    <p class="subtitle">{subtitle}</p>
  </div>
  <Switch bind:checked on:click/>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--default-grey);
    padding: 12px 0 ;
  }
  .title {
    font-size: 20px;
    color: var(--on-light)
  }
  .subtitle {
    font-size: 16px;
    color: var(--on-light-terciary)
  }
  :global(body.dark-mode) .title {
    color: var(--on-dark)
  }
  :global(body.dark-mode) .subtitle {
    color: var(--on-dark-terciary)
  }
</style>
