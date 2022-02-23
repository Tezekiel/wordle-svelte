<script lang="ts">
  export let keyValue = ""
  export let isActions = false
</script>

<div class="{isActions ? 'special container' : 'container'}">
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

  .special{
    height: 100%;
    width: 70px;
  }
</style>
