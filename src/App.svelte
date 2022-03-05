<script lang="ts">
  import Header from "./components/Header.svelte";
  import FullScreenDialog from "./components/FullScreenDialog.svelte";
  import Keyboard from "./components/Keyboard.svelte";
  import InputArea from "./components/input-area/InputArea.svelte"
  import Switch from "./ui-components/Switch.svelte"
  import { SettingsStore, toggleProperty } from "./store/settings";
  import { get } from 'svelte/store';

  let checked = get(SettingsStore).darkMode

  const handleChange = () => {
    toggleProperty('darkMode')
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css">
</svelte:head>

<main class="game-container main-flex">
  <FullScreenDialog title="How to play" storeProp="helpVisible"/>

  <FullScreenDialog title="Settings" storeProp="settingsVisible">
    <Switch bind:checked on:click={handleChange}/>
  </FullScreenDialog>

  <Header/>
  <InputArea/>
  <Keyboard/>
</main>

<style>
  .main-flex {
    display: flex;
    flex-direction: column;
  }
</style>
