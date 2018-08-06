<template>
  <div id="app" class="row justify-content-center">
    <div class="col-10">
      <app-header></app-header>
      <app-tank></app-tank>
      <app-control></app-control>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Tank from './components/Tank';
import Control from './components/Control';

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appTank: Tank,
    appControl: Control,
  },
};
</script>

<style>
</style>
