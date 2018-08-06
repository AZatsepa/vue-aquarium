<template lang="html">
  <div class="row mt-3">
    <app-settings></app-settings>
    <app-buttons></app-buttons>
  </div>
</template>

<script>
import Settings from './Settings';
import Buttons from './Buttons';

export default {
  components: {
    appSettings: Settings,
    appButtons: Buttons,
  },
};
</script>

<style lang="css" scoped>
</style>
