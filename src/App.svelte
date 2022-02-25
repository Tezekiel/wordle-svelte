<script lang="ts">
  import Header from "./components/Header.svelte";
  import FullScreenDialog from "./components/FullScreenDialog.svelte";
  import Keyboard from "./components/Keyboard.svelte";
  import InputArea from "./components/input-area/InputArea.svelte"
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css">
</svelte:head>

<main class="game-container main-flex">
  <FullScreenDialog title="Settings" storeProp="settingsVisible">
    <p>TEST child element</p>
  </FullScreenDialog>
  <FullScreenDialog title="How to play" storeProp="helpVisible"/>

  <Header/>
  <InputArea/>
  <Keyboard/>
</main>

<style>
  .main-flex{
    display: flex;
    flex-direction: column;
  }
</style>
