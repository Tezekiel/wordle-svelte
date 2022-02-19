<script lang="ts">
  import { IconType } from "./model/types";

  export let type = IconType.Warning

  const iconFromType = (type: IconType) => {
    switch (type) {
      case IconType.Help:
        return {iconClass: 'mi-circle-help', iconDesc: 'Circle help'}
      case IconType.Settings:
        return {iconClass: 'mi-settings', iconDesc: 'Settings'}
      case IconType.Warning:
        return {iconClass: 'mi-warning', iconDesc: 'Warning'}
    }
  }

  let {iconClass, iconDesc} = iconFromType(type)
</script>

<div>
  <i class="mi {iconClass}">
    <span class="u-sr-only">{iconDesc}</span>
  </i>
</div>

<style>
  div {
    cursor: pointer;
  }
</style>

