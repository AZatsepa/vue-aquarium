<template>
  <div id="app" class="row justify-content-center">
    <div class="col-10">
      <app-header></app-header>
      <hr>
      <app-tank></app-tank>
      <hr>
      <transition name="fade">
        <app-settings v-if="!$store.state.gameStarted"></app-settings>
      </transition>
      <app-buttons></app-buttons>
      <div class="d-none">
        <img src="./assets/img/crucian.png" alt="" width="50" height="50" id="crucian2">
        <img src="./assets/img/pike.png" alt="" width="50" height="50" id="pike2">
        <img src="./assets/img/seaweed.png" alt="" width="50" height="50" id="seaweed2">
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Tank from './components/Tank';
import Settings from './components/Settings';
import Buttons from './components/Buttons';

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appTank: Tank,
    appSettings: Settings,
    appButtons: Buttons,
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
