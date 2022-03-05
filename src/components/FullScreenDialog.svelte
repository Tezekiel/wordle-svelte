<script lang="ts">
  import { SettingsStore, toggleProperty } from "../store/settings"
  import { slide } from "svelte/transition"
  import { IconType } from "../ui-components/model/types";
  import IconButton from "../ui-components/IconButton.svelte"

  export let storeProp: string = ""
  export let title: string = ""

  $: visible = $SettingsStore[storeProp]

</script>

{#if (visible)}
  <div class="app-container main" transition:slide>
    <div class="title">
      <h1>{title}</h1>
      <IconButton type={IconType.Close} on:click={() => toggleProperty(storeProp)}/>
    </div>
    <slot></slot>
  </div>
{/if}

<style>
  .main {
    position: absolute;
    background-color: var(--light-bg);
    color: var(--on-light);
    height: 100vh;
  }

  :global(body.dark-mode) .main {
    background-color: var(--dark-bg);
  }

  .title {
    margin: 0 -20px;
    padding: 0 20px;
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
