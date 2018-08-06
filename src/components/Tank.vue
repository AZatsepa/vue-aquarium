<template lang="html">
  <div class="row justify-content-center">
    <app-cells-line v-for="(line, index) in tankHeight" :key="index"></app-cells-line>
  </div>
</template>

<script>
import CellsLine from './CellsLine';

export default {
  components: {
    appCellsLine: CellsLine,
  },
  computed: {
    tankHeight() {
      return this.$store.getters.aquariumHeight;
    },
  },
};
</script>

<style lang="css">
  .tank-wrapper {
    border: 1px solid #000;
  }
</style>
