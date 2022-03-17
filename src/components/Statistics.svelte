<script lang="ts">
  import Label from "./ui-components/Label.svelte";
  import type { GameAnalytics } from "../store/types/types";
  import { localization } from "../store/localization";

  export let statistics: GameAnalytics
  $: lang = $localization

</script>

<div>
  <div class="labelRow">
    <Label content={statistics.played} label={lang.get('stat-played')}/>
    <Label content={statistics.winPercent} label={lang.get('stat-win')}/>
    <Label content={statistics.streak} label={lang.get('stat-cur-streak')}/>
    <Label content={statistics.maxStreak} label={lang.get('stat-max-streak')}/>
  </div>
  <h1>{lang.get('stat-distribution')}</h1>
</div>

<style>
  .labelRow {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    margin: 24px auto;
  }
  h1 {
    text-align: center;
    margin: 32px 0;
  }

</style>
