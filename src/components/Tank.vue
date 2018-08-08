<template lang="html">
  <div class="row justify-content-center">
    <canvas id="canvas" :width="tankWidth" :height="tankHeight"></canvas>
  </div>
</template>

<script>
export default {
  computed: {
    tankHeight() {
      return `${this.$store.getters.aquariumHeight * this.$store.getters.cellSize}px`;
    },
    tankWidth() {
      return `${this.$store.getters.aquariumWidth * this.$store.getters.cellSize}px`;
    },
  },
};
</script>

<style lang="css">
  canvas {
    border: 1px solid black;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background-color: rgb(104, 207, 235);
  }
</style>
