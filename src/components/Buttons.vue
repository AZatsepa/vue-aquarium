<template lang="html">
  <div class="col-3">
  <button class="btn" :class="buttonClass" @click="play">{{ action }}</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      gameStarted: false,
      action: 'Start Game',
      buttonClass: { 'btn-success': true },
    };
  },
  methods: {
    play() {
      if (this.$store.getters.gameStarted) {
        this.$store.commit('stopGame');
      } else {
        this.$store.commit('startGame');
      }
      this.action = this.$store.getters.gameStarted ? 'Stop Game' : 'Start Game';
      this.buttonClass = this.$store.getters.gameStarted ? ({ 'btn-danger': true }) : ({ 'btn-success': true });
    },
  },
};
</script>

<style lang="css">
</style>
