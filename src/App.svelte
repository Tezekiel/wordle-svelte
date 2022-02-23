<script lang="ts">
  import Header from "./components/Header.svelte";
  import FullScreenDialog from "./components/FullScreenDialog.svelte";
  import Keyboard from "./components/Keyboard.svelte";

  document.onkeydown = function (event) {
    let char = event.key

    console.log(char)
  }
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
  <div class="input-section">

  </div>
  <Keyboard/>
</main>

<style>
  .main-flex{
    display: flex;
    flex-direction: column;
  }

  .input-section {
    flex: 0.25 1;
    align-items: center;
    display: flex;
    justify-content: center;
  }
</style>
