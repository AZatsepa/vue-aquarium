<template lang="html">
  <div class="container col-9 text-left">
    <div class="row">
      <div class="col-6">
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">
            <img src="../assets/pike.png" alt="" width="50" height="50" id="pike">
          </label>
          <div class="col-sm-3">
            <input type="number" class="form-control" v-model="pikesNumber" @change="changePikesNumber">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">
            <img src="../assets/crucian.png" alt="" width="50" height="50" id="crucian">
          </label>
          <div class="col-sm-3">
            <input type="number" class="form-control" v-model="cruciansNumber" @change="changeCruciansNumber">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">
            <img src="../assets/seaweed.png" alt="" width="50" height="50" id="seaweed">
          </label>
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
          <label class="col-sm-5 col-form-label">Set Interval</label>
          <div class="col-sm-3">
            <input type="number" class="form-control" @change="changeStepsInterval($event)" value="500">
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
      pikesNumber: this.$store.getters.pikesNumber,
      cruciansNumber: this.$store.getters.cruciansNumber,
      seaweedsNumber: this.$store.getters.seaweedsNumber,
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
    changeStepsInterval(event) {
      this.$store.commit('changeStepsInterval', +event.target.value);
    },
  },
};
</script>

<style lang="css">
</style>
