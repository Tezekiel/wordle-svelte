<script lang="ts">
  import Header from "./components/Header.svelte";
  import FullScreenDialog from "./components/FullScreenDialog.svelte";
  import Keyboard from "./components/Keyboard.svelte";
  import InputArea from "./components/input-area/InputArea.svelte"
  import Help from "./ui-components/Help.svelte"
  import SettingsItem from "./ui-components/SettingsItem.svelte"
  import { SettingsStore, toggleProperty } from "./store/settings";
  import { get } from 'svelte/store';
  import { Snackbar } from 'svelte-mui';
  import { messageFromValidation } from "./mappers/message-from-validation";

  let checked = get(SettingsStore).darkMode
  let errorMessage
  let visible = false
  let shakeRow = false

  const handleChange = () => {
    toggleProperty('darkMode')
  }

  const handleValidation = (event) => {
    shakeRow = false
    errorMessage = messageFromValidation(event);
    if (errorMessage) {
      visible = true
      shakeRow = true
      // animation ends in 400ms, reset it
      setTimeout(() => shakeRow = false, 400)
    }
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css">
</svelte:head>

<main class="game-container main-flex">
  <FullScreenDialog title="How to play" storeProp="helpVisible">
    <Help/>
  </FullScreenDialog>

  <FullScreenDialog title="Settings" storeProp="settingsVisible">
    <SettingsItem
      bind:checked on:click={handleChange}
      title="{'Dark mode'}"
      subtitle="{'Come to the dark side'}"/>
  </FullScreenDialog>

  <Snackbar bind:visible timeout="2">
    {errorMessage}
  </Snackbar>

  <Header/>
  <InputArea {shakeRow}/>
  <Keyboard on:validation={handleValidation}/>
</main>

<style>
  .main-flex {
    display: flex;
    flex-direction: column;
  }
</style>
