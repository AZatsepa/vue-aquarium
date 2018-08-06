<template lang="html">
  <div class="col-3">
  <button class="btn" :class="buttonClass" @click="play">{{ action }}</button>
</div>
</template>

<script>
import { eventBus } from '../main';

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
      setInterval(() => {
        console.log('Emited');
        eventBus.$emit('swim');
      }, 300);
    },
  },
};
</script>

<style lang="css">
</style>
