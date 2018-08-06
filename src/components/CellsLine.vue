<template lang="html">
  <div class="row">
  <app-cell v-for="cell in $store.getters.aquariumWidth" :key="cell" :inhabitant="inhabitant"></app-cell>
  </div>
</template>

<script>
import Cell from './Cell';
import Pike from '../inhabitants/Pike';

export default {
  components: {
    appCell: Cell,
  },
  methods: {
    inhabitant() {
      return new Pike();
    },
  },
};
</script>

<style lang="css" scoped>
  .row {
    height: 30px;
    background-color: #90ffe8;
  }
</style>
