<script lang="ts">
  import InputRow from "./../components/input-area/InputRow.svelte"
  import { exampleOne, exampleTwo, exampleThree } from "../constants";

</script>

<div class="wrapper">
  <p>Guess the <strong>WORDLE</strong> in 6 tries.</p>
  <p>Each guess must be a valid 5 letter lewd word. Hit the enter button to submit.</p>
  <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
  <hr>
  <h3>Example:</h3>
  <div class="small-row"><InputRow row="{exampleOne}" class="small-row"/></div>
  <p>The letter <strong>B</strong> is in the word and in the correct spot.</p>
  <div class="small-row"><InputRow row="{exampleTwo}"/></div>
  <p>The letter <strong>R</strong> is in the word but in the wrong spot.</p>
  <div class="small-row"><InputRow row="{exampleThree}"/></div>
  <p>The letter <strong>V</strong> is not in the word in any spot.</p>
  <hr>
  <p>New <strong>WORDLE</strong> is available each day.</p>
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
