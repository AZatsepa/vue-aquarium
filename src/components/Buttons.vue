<template lang="html">
  <div class="row justify-content-center">
    <button class="btn" :class="buttonClass" @click="play" :disabled="!$store.state.settingsValid">{{ text }}</button>
  </div>
</template>

<script>
const Tank = require('../api/Tank').default;

export default {
  data() {
    return {
      gameStarted: false,
      tank: null,
    };
  },
  methods: {
    play() {
      if (!this.$store.state.gameStarted) {
        this.$store.commit('startGame');
        this.tank.fillTank();
        this.tank.run();
      } else {
        this.$store.commit('stopGame');
        this.tank.stop();
      }
    },
  },
  computed: {
    text() {
      return this.$store.state.gameStarted ? 'Stop Game' : 'Start Game';
    },
    buttonClass() {
      return this.$store.state.gameStarted ? ({ 'btn-danger': true }) : ({ 'btn-success': true });
    },
  },
  mounted() {
    this.tank = new Tank();
  },
};
</script>

<style lang="css">
</style>
