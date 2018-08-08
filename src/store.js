import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameStarted: false,
    pikesNumber: 0,
    cruciansNumber: 1,
    seaweedsNumber: 0,
    aquariumHeight: 10,
    aquariumWidth: 10,
    cellSize: 50,
    interval: 100,
    bar: 10,
  },
  getters: {
    gameStarted: state => state.gameStarted,
    aquariumHeight: state => state.aquariumHeight,
    cruciansNumber: state => state.cruciansNumber,
    pikesNumber: state => state.pikesNumber,
    seaweedsNumber: state => state.seaweedsNumber,
    aquariumWidth: state => state.aquariumWidth,
    tankHeight: state => state.tankHeight,
    cellSize: state => state.cellSize,
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
