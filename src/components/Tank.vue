<template lang="html">
  <div class="row justify-content-center">
    <canvas id="canvas" :width="tankWidth" :height="tankHeight"></canvas>
    <!-- <app-cells-line v-for="(line, index) in tankHeight" :key="index"></app-cells-line> -->
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
      return `${(this.$store.getters.aquariumHeight + 1) * 30}px`;
    },
    tankWidth() {
      return `${(this.$store.getters.aquariumWidth + 1) * 30}px`;
    },
  },
};
</script>

<style lang="css">
  .tank-wrapper {
    border: 1px solid #000;
  }
  canvas {
    border: 1px solid black;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background-color: rgb(104, 207, 235);
  }
</style>
