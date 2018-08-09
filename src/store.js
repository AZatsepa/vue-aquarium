import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameStarted: false,
    pikesNumber: 3,
    cruciansNumber: 5,
    seaweedsNumber: 0,
    aquariumHeight: 10,
    aquariumWidth: 10,
    cellSize: 50,
    interval: 300,
    settingsValid: true,
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
    invalidSettings(state) {
      state.settingsValid = false;
    },
    validSettings(state) {
      state.settingsValid = true;
    },
  },
});
