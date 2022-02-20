<script lang="ts">
  import Header from "./components/Header.svelte";
  import FullScreenDialog from "./components/FullScreenDialog.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css">
</svelte:head>

<main class="game-container">
  <FullScreenDialog title="Settings" storeProp="settingsVisible">
    <p>TEST child element</p>
  </FullScreenDialog>
  <FullScreenDialog title="How to play" storeProp="helpVisible"/>
  <Header/>
</main>

<style>

</style>
