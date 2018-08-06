<template lang="html">
  <div class="container col-9 text-left">
    <div class="row">
      <div class="col-6">
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Pikes</label>
          <div class="col-sm-3">
            <input type="number" class="form-control" v-model="pikesNumber" @change="changePikesNumber">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Crucians</label>
          <div class="col-sm-3">
            <input type="number" class="form-control" v-model="cruciansNumber" @change="changeCruciansNumber">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Seaweeds</label>
          <div class="col-sm-3">
            <input type="number" class="form-control" v-model="seaweedsNumber" @change="changeSeaweedsNumber">
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group row">
          <label class="col-sm-5 col-form-label">Aquarium height</label>
          <div class="col-sm-3">
            <input type="number" class="form-control" @change="changeAquariumHeight($event)" value="10">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-5 col-form-label">Aquarium width</label>
          <div class="col-sm-3">
            <input type="number" class="form-control" @change="changeAquariumWidth($event)" value="10">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-5 col-form-label">Set Timeout</label>
          <div class="col-sm-3">
            <input type="number" class="form-control" @change="changeTimeout($event)" value="0.5">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pikesNumber: 5,
      cruciansNumber: 5,
      seaweedsNumber: 5,
    };
  },
  methods: {
    changePikesNumber() {
      this.$store.commit('changePikesNumber', +this.pikesNumber);
    },
    changeCruciansNumber() {
      this.$store.commit('changeCruciansNumber', +this.cruciansNumber);
    },
    changeSeaweedsNumber() {
      this.$store.commit('changeSeaweedsNumber', +this.seaweedsNumber);
    },
    changeAquariumHeight(event) {
      this.$store.commit('changeAquariumHeight', +event.target.value);
    },
    changeAquariumWidth(event) {
      this.$store.commit('changeAquariumWidth', +event.target.value);
    },
    changeTimeout(event) {
      this.$store.commit('changeTimeout', +event.target.value);
    },
  },
};
</script>

<style lang="css">
</style>
