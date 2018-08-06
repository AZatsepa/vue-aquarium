<template lang="html">
  <div class="foo">
    {{ inhabitant().coords.x }}
  </div>
</template>

<script>
export default {
  props: ['inhabitant'],
  computed: {
    name() {
      return this.inhabitant().name;
    },
  },
};
</script>

<style lang="css" scoped>
  .foo {
    width: 60px;
    text-align: center;
  }
</style>
