<script lang="ts">
  import Header from "./components/Header.svelte";
  import FullScreenDialog from "./components/FullScreenDialog.svelte";
  import Keyboard from "./components/Keyboard.svelte";
  import InputArea from "./components/input-area/InputArea.svelte"
  import Help from "./ui-components/Help.svelte"
  import SettingsItem from "./ui-components/SettingsItem.svelte"
  import { settings, toggleProperty } from "./store/settings";
  import { get } from 'svelte/store';
  import { Snackbar } from 'svelte-mui';
  import { messageFromValidation } from "./mappers/message-from-validation";
  import { Validation } from "./store/usecase/validateRow/validateRow";
  import { getWordOfDayString } from "./usecases/getWordOfDay/getWordOfDay"
  import { localization } from "./store/localization";

  let checked = get(settings).darkMode
  let checkedLang = get(settings).isEnglish
  let errorMessage
  let visible = false
  let shakeRow = false
  let showWinDialog = false
  let showLostDialog = false

  $: lang = $localization

  const handleChange = () => {
    toggleProperty('darkMode')
  }

  function handleErrors(event) {
    shakeRow = false
    errorMessage = messageFromValidation(event);
    if (errorMessage) {
      visible = true
      shakeRow = true
      // animation ends in 400ms, reset it
      setTimeout(() => shakeRow = false, 400)
    }
  }

  function handleWin() {
    showWinDialog = true
  }

  function handleLoss() {
    showLostDialog = true
  }

  const handleValidation = (event) => {
    switch (event.detail.status as Validation) {
      case Validation.Done:
        handleWin();
        break;
      case Validation.Lost:
        handleLoss()
        break;
      default:
        handleErrors(event)
    }
  }

  const handleChangeLang = () => {
    toggleProperty('isEnglish')
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css">
</svelte:head>

<main class="game-container main-flex">
  <FullScreenDialog title={lang.get('help_title')} storeProp="helpVisible">
    <Help/>
  </FullScreenDialog>

  <FullScreenDialog title={lang.get('settings')} storeProp="settingsVisible">
    <SettingsItem
      bind:checked on:click={handleChange}
      title="{lang.get('dark_mode')}"
      subtitle="{lang.get('dark_mode_desc')}"/>
    <SettingsItem
      bind:checked={checkedLang} on:click={handleChangeLang}
      title="{'Hrvatski/English'}"
      subtitle="{lang.get('lang_desc')}"/>
  </FullScreenDialog>

  <!-- Invalid try -->
  <Snackbar bind:visible timeout="2">
    {errorMessage}
  </Snackbar>

  <!-- Lost -->
  <Snackbar bind:visible={showLostDialog} timeout="0">
    {lang.get('solution')} {getWordOfDayString()}
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
