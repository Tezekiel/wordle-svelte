<script lang="ts">
  import Header from "./components/Header.svelte";
  import FullScreenDialog from "./components/FullScreenDialog.svelte";
  import Keyboard from "./components/Keyboard.svelte";
  import InputArea from "./components/input-area/InputArea.svelte"
  import Help from "./components/ui-components/Help.svelte"
  import SettingsItem from "./components/ui-components/SettingsItem.svelte"
  import { settings, toggleProperty } from "./store/settings";
  import { get } from 'svelte/store';
  import { Snackbar, Dialog } from 'svelte-mui';
  import { messageFromValidation } from "./mappers/message-from-validation";
  import { Validation } from "./store/usecase/validateRow/validateRow";
  import { getWordOfDayString } from "./usecases/getWordOfDay/getWordOfDay"
  import { localization } from "./store/localization";
  import { getBlockGame, setBlockGame } from "./store/storage/storedBlockGame";
  import { updateAnalytics } from "./store/usecase/updateAnalytics/updateAnalytics";
  import Statistics from "./components/Statistics.svelte";
  import Label from "./components/ui-components/Label.svelte";
  import { getGameAnalytics } from "./store/storage/storedAnalytics";

  let checked = get(settings).darkMode
  let checkedLang = get(settings).isEnglish
  let errorMessage
  let visible = false
  let shakeRow = false
  let showWinDialog = false
  let showLostSnack = false

  $: lang = $localization
  $: blockInputs = getBlockGame()

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
    handleEndGame(true)
    setTimeout(() => showWinDialog = true, 2200)
  }

  function handleLoss() {
    handleEndGame();
    setTimeout(() => showLostSnack = true, 1800)
  }

  function handleEndGame(isWin: boolean = false) {
    blockInputs = true
    setBlockGame(true)
    updateAnalytics(isWin)
  }

  const handleValidation = (event) => {
    switch (event.detail.status as Validation) {
      case Validation.Win:
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
  <Snackbar bind:visible={showLostSnack} timeout="0">
    {lang.get('solution')} {getWordOfDayString()}
  </Snackbar>

  <!-- TODO  REvert to   <Dialog visible="{showWinDialog}" -->
  <Dialog visible={true} width="640" --bg-panel={checked ? 'var(--dark-bg)' : 'var(--light-bg)'}>
    <div slot="title">{lang.get('stat-title')}</div>
    <Statistics statistics="{getGameAnalytics()}"/>
  </Dialog>

  <Header/>
  <InputArea {shakeRow}/>
  <Keyboard on:validation={handleValidation} inputsBlocked="{blockInputs}"/>
</main>

<style>
  .main-flex {
    display: flex;
    flex-direction: column;
  }
</style>
