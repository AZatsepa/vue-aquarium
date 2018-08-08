<template lang="html">
  <div class="col-3">
  <button class="btn" :class="buttonClass" @click="play">{{ action }}</button>
</div>
</template>

<script>
const Tank = require('../Tank').default;

export default {
  data() {
    return {
      gameStarted: false,
      action: 'Start Game',
      buttonClass: { 'btn-success': true },
      tank: null,
    };
  },
  methods: {
    play() {
      this.tank.fillTank();

      if (!this.$store.getters.gameStarted) {
        this.$store.commit('startGame');
        this.tank.run();
      } else {
        this.$store.commit('stopGame');
        clearInterval(this.tank.run);
      }
      this.action = this.$store.getters.gameStarted ? 'Stop Game' : 'Start Game';
      this.buttonClass = this.$store.getters.gameStarted ? ({ 'btn-danger': true }) : ({ 'btn-success': true });
    },
  },
  mounted() {
    this.tank = new Tank();
  },
};
</script>

<style lang="css">
</style>
