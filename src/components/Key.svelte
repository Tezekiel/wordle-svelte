<script lang="ts">
  export let keyValue = ""
  export let isActions = false
  let element

  export const forceClick = () => {
    element.click()
    element.animate([
      { transform: 'translateY(3px)' },
      { backgroundColor: 'yellow' }
    ], {duration: 150,})
  }

  const handleClick = () => {
    console.log('clicked')
  }


</script>

<div class="key {isActions ? 'special container' : 'container'}" bind:this={element} on:click={handleClick}>
  {keyValue}
</div>

<style>
  .container {
    align-items: center;
    border-radius: 3px;
    color: #d7dadc;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 700;
    height: 27%;
    width: 48px;
    margin: 4px 2px;
    background-color: rgb(129, 131, 132);
    justify-content: center;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .special {
    height: 100%;
    width: 70px;
  }

  .key:active {
    background-color: yellow;
    transform: translateY(3px);
  }

</style>
