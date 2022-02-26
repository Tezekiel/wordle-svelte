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
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <slot></slot>
  </div>
{/if}

<style>
  .main{
    position: absolute;
    background-color: #202142;
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
