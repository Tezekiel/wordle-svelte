<script lang="ts">
  import Label from "./ui-components/Label.svelte";
  import type { GameAnalytics, GuessDistribution } from "../store/types/types";
  import { localization } from "../store/localization";
  import { Button, Icon } from 'svelte-mui';
  import { share } from "./constants/icons";
  import { onMount } from "svelte";

  export let statistics: GameAnalytics
  $: lang = $localization
  $: largest = getLargest(statistics.guessDistribution)

  const isLatest = (guess: number) => {
    return statistics.guessDistribution.latest === guess ? 'latest' : ''
  }

  const getLargest = (distr: GuessDistribution): number => {
    // need to remove last as it contains key of the latest guess
    return Math.max(...Object.values(distr).slice(0, 6))
  }

  const widthPercent = (won: number) => {
    if (won === 0) return '10%'
    return `${won / largest * 100}%`
  }

  // timer related
  let date = new Date().getTime()
  const midnight = new Date()
  midnight.setHours(23)
  midnight.setMinutes(0)
  midnight.setSeconds(0)
  $: time = new Date(midnight - date).toLocaleTimeString()
  onMount(() => {
    const interval = setInterval(() => {
      date = new Date().getTime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<div>
  <div class="label-row">
    <Label content={statistics.played} label={lang.get('stat-played')}/>
    <Label content={statistics.winPercent} label={lang.get('stat-win')}/>
    <Label content={statistics.streak} label={lang.get('stat-cur-streak')}/>
    <Label content={statistics.maxStreak} label={lang.get('stat-max-streak')}/>
  </div>

  <h1>{lang.get('stat-distribution')}</h1>

  <div class="graph-area">
    <div class="graph-bar-container">
      <p>1</p>
      <div class="graph-bar {isLatest(1)}"
           style="--width:{widthPercent(statistics.guessDistribution[1])}">{statistics.guessDistribution[1]}</div>
    </div>
    <div class="graph-bar-container">
      <p>2</p>
      <div class="graph-bar {isLatest(2)}"
           style="--width:{widthPercent(statistics.guessDistribution[2])}">{statistics.guessDistribution[2]}</div>
    </div>
    <div class="graph-bar-container">
      <p>3</p>
      <div class="graph-bar {isLatest(3)}"
           style="--width:{widthPercent(statistics.guessDistribution[3])}">{statistics.guessDistribution[3]}
      </div>
    </div>
    <div class="graph-bar-container">
      <p>4</p>
      <div class="graph-bar {isLatest(4)}"
           style="--width:{widthPercent(statistics.guessDistribution[4])}">{statistics.guessDistribution[4]}
      </div>
    </div>
    <div class="graph-bar-container">
      <p>5</p>
      <div class="graph-bar {isLatest(5)}"
           style="--width:{widthPercent(statistics.guessDistribution[5])}">{statistics.guessDistribution[5]}
      </div>
    </div>
    <div class="graph-bar-container">
      <p>6</p>
      <div class="graph-bar {isLatest(6)}"
           style="--width:{widthPercent(statistics.guessDistribution[6])}">{statistics.guessDistribution[6]}
      </div>
    </div>
  </div>

  <div class="share-area">
    <div class="timer-area">
      <h3>{lang.get('stat-next')}</h3>
      <h2>{time}</h2>
    </div>
    <div class="divider"></div>
    <Button color="{'var(--validation-green)'}" raised="true" on:click>
      {lang.get('stat-share')}
      <!-- right icon -->
      <Icon path="{share}" style="margin: 0 -4px 0 8px;"/>
    </Button>
  </div>
</div>

<style>
  .label-row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 85%;
    margin: 24px auto;
  }

  h1 {
    text-align: center;
    margin: 32px 0;
  }

  .graph-area {
    width: 80%;
    margin: 2em 4em;
    color: var(--on-light-secondary);
  }

  :global(body.dark-mode) .graph-area {
    color: var(--on-dark);
  }

  .graph-bar-container {
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    align-content: space-between;
    padding-bottom: 4px;
    font-size: 16px;
    line-height: 2rem;
    margin: 0.6em 0;
  }

  .graph-bar-container p {
    width: 12px;
    text-align: center;
    margin-right: 8px;
  }

  .graph-bar {
    width: var(--width);
    text-align: right;
    padding-right: 18px;
    height: 1.8rem;
    background-color: var(--validation-grey);
    color: var(--on-dark);
  }

  .latest {
    background-color: var(--validation-green);
  }

  .share-area {
    height: 5rem;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
    align-items: center;
  }

  .divider {
    height: 100%;
    width: 2px;
    background-color: var(--default-grey);
  }

  .timer-area h2, h3 {
    text-align: center;
  }

  .timer-area h3 {
    color: var(--on-light-secondary);
  }

  :global(body.dark-mode) .timer-area h3 {
    color: var(--on-dark);
  }


</style>
