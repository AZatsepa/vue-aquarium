<template lang="html">
  <div class="container col-9 text-left">
    <div class="row">
      <div class="col-6">
        <div class="form-group row">
          <img src="../assets/img/pike.png" alt="" width="50" height="50" id="pike">
          <div class="col-sm-3">
            <input type="number"
                   class="form-control"
                   v-model="pikesNumber"
                   @input="handlePikesInput">
          </div>
        </div>
        <div class="form-group row">
          <img src="../assets/img/crucian.png" alt="" width="50" height="50" id="crucian">
          <div class="col-sm-3">
            <input type="number"
                   class="form-control"
                   v-model="cruciansNumber"
                   @input="handleCruciansInput">
          </div>
        </div>
        <div class="form-group row">
          <img src="../assets/img/seaweed.png" alt="" width="50" height="50" id="seaweed">
          <div class="col-sm-3">
            <input type="number"
                   class="form-control"
                   v-model="seaweedsNumber"
                   @input="handleSeaweedsInput">
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group row">
          <label class="col-sm-5 col-form-label">Aquarium height (20 cells max)</label>
          <div class="col-sm-5">
            <input type="number"
                   class="form-control"
                   :value="aquariumHeight"
                   @input="handleAquariumHeightInput">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-5 col-form-label">Aquarium width (20 cells max)</label>
          <div class="col-sm-5">
            <input type="number"
                   class="form-control"
                   :value="aquariumWidth"
                   @input="handleAquariumWidthInput">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-5 col-form-label">Set Interval (ms)</label>
          <div class="col-sm-5">
            <input type="number"
                   class="form-control"
                   :value="interval"
                   @input="handleIntervalInput">
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
      aquariumHeight: this.$store.getters.aquariumHeight,
      aquariumWidth: this.$store.getters.aquariumWidth,
      interval: this.$store.getters.interval,
    };
  },
  methods: {
    handlePikesInput(event) {
      const value = Number(event.target.value);
      if (value < 0 || Number.isNaN(value)) {
        this.pikesNumber = 0;
        this.$store.commit('changePikesNumber', 0);
      } else {
        this.pikesNumber = value;
        this.$store.commit('changePikesNumber', value);
      }
    },
    handleCruciansInput(event) {
      const value = Number(event.target.value);
      if (value < 0 || Number.isNaN(value)) {
        this.cruciansNumber = 0;
        this.$store.commit('changeCruciansNumber', 0);
      } else {
        this.cruciansNumber = value;
        this.$store.commit('changeCruciansNumber', value);
      }
    },
    handleSeaweedsInput(event) {
      const value = Number(event.target.value);
      if (value < 0 || Number.isNaN(value)) {
        this.seaweedsNumber = 0;
        this.$store.commit('changeSeaweedsNumber', 0);
      } else {
        this.seaweedsNumber = value;
        this.$store.commit('changeSeaweedsNumber', value);
      }
    },
    handleAquariumHeightInput(event) {
      const value = Number(event.target.value);
      if (value < 4 || Number.isNaN(value)) {
        this.aquariumHeight = 4;
        this.$store.commit('changeAquariumHeight', 4);
      } else if (value > 20) {
        this.aquariumHeight = 20;
        this.$store.commit('changeAquariumHeight', 20);
      } else {
        this.aquariumHeight = value;
        this.$store.commit('changeAquariumHeight', value);
      }
    },
    handleAquariumWidthInput(event) {
      const value = Number(event.target.value);
      if (value < 4 || Number.isNaN(value)) {
        this.aquariumWidth = 4;
        this.$store.commit('changeAquariumWidth', 4);
      } else if (value > 20) {
        this.aquariumWidth = 20;
        this.$store.commit('changeAquariumWidth', 20);
      } else {
        this.aquariumWidth = value;
        this.$store.commit('changeAquariumWidth', value);
      }
    },
    handleIntervalInput(event) {
      const value = Number(event.target.value);
      if (value < 100 || Number.isNaN(value)) {
        this.interval = 100;
        this.$store.commit('changeStepsInterval', 100);
      } else {
        this.interval = value;
        this.$store.commit('changeStepsInterval', value);
      }
    },
  },
};
</script>

<style lang="css">
</style>
