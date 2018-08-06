<template lang="html">
  <div class="foo">
    {{ coordX }}
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: ['inhabitant'],
  computed: {
    coordX() {
      return this.inhabitant().coords.x;
    },
  },
  created() {
    eventBus.$on('swim', () => {
      console.log(this.inhabitant().coords.x);
      this.inhabitant().swim();
    });
  },
};
</script>

<style lang="css" scoped>
  .foo {
    width: 60px;
    text-align: center;
  }
</style>
