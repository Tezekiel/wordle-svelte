<script lang="ts">
  export let content = ''
  export let label = ''
</script>

<div class="wrapper">
  <h2 class="content text">{content}</h2>
  <p class="label text">{label}</p>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 9rem;
    width: 5rem;
  }

  .content {
    font-size: 2.8rem;
  }

  .label {
    font-size: 1.1rem;
    font-weight: 300;
  }

  .text {
    color: var(--on-light-secondary);
    text-align: center;
  }

  :global(body.dark-mode) .text {
    color: var(--on-dark-secondary)
  }
</style>
