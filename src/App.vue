<template>
  <div id="app" class="row justify-content-center">
    <div class="col-10">
      <app-header></app-header>
      <app-tank></app-tank>
      <hr>
      <app-settings></app-settings>
      <hr>
      <app-buttons></app-buttons>
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
</style>
