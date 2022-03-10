<script lang="ts">
  import InputRow from "./../components/input-area/InputRow.svelte"
  import { exampleOne, exampleTwo, exampleThree } from "../constants";
  import { localization } from "../store/localization";

  $: lang = $localization
</script>

<div class="wrapper">
  <p>{lang.get('help_text_1a')} <strong>Wordle-Cro</strong> {lang.get('help_text_1b')}</p>
  <p>{lang.get('help_text_2')}</p>
  <p>{lang.get('help_text_3')}</p>
  <hr>
  <h3>{lang.get('help_text_4')}</h3>
  <div class="small-row"><InputRow row="{exampleOne}" class="small-row"/></div>
  <p>{lang.get('help_text_5a')} <strong>B</strong> {lang.get('help_text_5b')}</p>
  <div class="small-row"><InputRow row="{exampleTwo}"/></div>
  <p>{lang.get('help_text_6a')} <strong>R</strong> {lang.get('help_text_6b')}</p>
  <div class="small-row"><InputRow row="{exampleThree}"/></div>
  <p>{lang.get('help_text_7a')} <strong>V</strong> {lang.get('help_text_7b')}</p>
  <hr>
  <p>{lang.get('help_text_8a')} <strong>Wordle-Cro</strong> {lang.get('help_text_8b')}</p>
</div>

<style>
  .small-row {
    margin: 6px 0;
    width: 60%;
  }
  p {
    padding: 10px 0;
    color: var(--on-light-secondary);
  }
  :global(body.dark-mode) p {
    color: var(--on-dark-secondary)
  }
  hr {
    margin: 12px 0;
  }
  h3 {
    margin-bottom: 12px;
  }
</style>
