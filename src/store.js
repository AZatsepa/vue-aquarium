import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameStarted: false,
    pikesNumber: 1,
    cruciansNumber: 1,
    seaweedsNumber: 0,
    aquariumHeight: 10,
    aquariumWidth: 10,
    interval: 500,
    bar: 10,
  },
  getters: {
    aquariumHeight: state => state.aquariumHeight,
    cruciansNumber: state => state.cruciansNumber,
    pikesNumber: state => state.pikesNumber,
    seaweedsNumber: state => state.seaweedsNumber,
    aquariumWidth: state => state.aquariumWidth,
    tankHeight: state => state.tankHeight,
    gameStarted: state => state.gameStarted,
    interval: state => state.interval,
  },
  mutations: {
    changePikesNumber(state, n) {
      state.pikesNumber = n;
    },
    changeCruciansNumber(state, n) {
      state.cruciansNumber = n;
    },
    changeSeaweedsNumber(state, n) {
      state.seaweedsNumber = n;
    },
    changeAquariumHeight(state, n) {
      state.aquariumHeight = n;
    },
    changeAquariumWidth(state, n) {
      state.aquariumWidth = n;
    },
    changeStepsInterval(state, n) {
      state.interval = n;
    },
    startGame(state) {
      state.gameStarted = true;
    },
    stopGame(state) {
      state.gameStarted = false;
    },
  },
});
