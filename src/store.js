import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameStarted: false,
    pikesNumber: 0,
    cruciansNumber: 0,
    seaweedsNumber: 0,
    aquariumHeight: 10,
    aquariumWidth: 10,
    timeout: 0.5,
    bar: 10,
  },
  getters: {
    aquariumHeight: state => state.aquariumHeight,
    aquariumWidth: state => state.aquariumWidth,
    tankHeight: state => state.tankHeight,
    gameStarted: state => state.gameStarted,
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
    changeTimeout(state, n) {
      state.timeout = n;
    },
    startGame(state) {
      state.gameStarted = true;
    },
    stopGame(state) {
      state.gameStarted = false;
    },
  },
});
